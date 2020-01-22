import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../services';
import * as d3 from 'd3';
import {Store} from '@ngrx/store';

import {AppState, dataActions} from '../../store';
import {Data, DescriptionModel} from '../../models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data: [Data];
  public size = 500;
  @ViewChild('g', {static: true}) el: ElementRef;
  public options = {
    margin: {top: 20, right: 20, bottom: 100, left: 50}
  };
  public description: DescriptionModel;

  constructor(public service: DataService,
              public store: Store<AppState>) {
  }

  ngOnInit() {
    this.description = {
      show: false,
      day: null,
      value: null,
      x: null,
      y: null
    };
    this.buildTable();

  }

  openForm() {
    this.store.dispatch(new dataActions.Success(null));
  }

  buildTable() {
    const {margin} = this.options;
    const g = d3.select(this.el.nativeElement);
    g.selectAll('*').remove();

    const minDataPoint = d3.min(this.data.map(item => item.value)) as number;
    const maxDataPoint = d3.max(this.data.map(item => item.value)) as number;

    const color = d3.scaleLinear()
      .domain([minDataPoint, maxDataPoint])
      .range(['#1A237E', '#4FC3F7'] as any)
      .interpolate(d3.interpolateHcl as any);

    const x: any = d3.scaleBand()
      .rangeRound([0, this.size - this.options.margin.left - this.options.margin.right])
      .domain(this.data.map(d => d.day));

    const xAxis = g.append('g')
      .classed('xAxis', true)
      .transition()
      .duration(500)
      .attr('transform', `translate(0,${this.size - margin.top - margin.bottom})`)
      .call(d3.axisBottom(x));


    xAxis
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('dx', '-.8em')
      .attr('dy', '.15em')
      .attr('transform', 'rotate(-30)');

    const y: any = d3.scaleLinear()
      .rangeRound([this.size - this.options.margin.top - this.options.margin.bottom, 0])
      .domain([0, d3.max(this.data
        .map(item => item.value)) * 1.2]
      );

    const yAxis = g.append('g')
      .classed('yAxis', true);

    yAxis.transition()
      .duration(500)
      .style('stroke-dasharray', '1,3')
      .call(d3.axisLeft(y)
        .tickSize(-this.size)
      );

    yAxis.select('.domain')
      .remove();

    yAxis
      .append('text')
      .attr('fill', '#000')
      .attr('transform', 'rotate(0)')
      .attr('dy', '-1em')
      .attr('text-anchor', 'end')
      .text('Time, mc');

    const bars = g.selectAll('rect.current')
      .data(this.data);

    bars
      .enter()
      .append('rect')
      .classed('bar', true)
      .attr('y', this.size - margin.top - margin.bottom)
      .attr('x', d => x(d.day) + x.bandwidth() / 10)
      .attr('width', x.bandwidth() * 4 / 5)
      .attr('height', 0)
      .attr('stroke', 'black')
      .attr('stroke-width', 0.5)
      .attr('fill', (d) => color(d.value))
      .on('mousemove', (d) => {
        const {layerX, layerY} = d3.event;
        this.description = {
          show: true,
          day: d.day,
          value: d.value,
          x: this.service.getTooltipXPosition(layerX, this.size),
          y: layerY
        };
      })
      .on('mouseout', () => {
        this.description = {
          ...this.description,
          show: false
        };
      })
      .transition()
      .duration(500)
      .attr('y', d => y(d.value))
      .attr('height', d => this.size - margin.top - margin.bottom - y(d.value));
  }
}

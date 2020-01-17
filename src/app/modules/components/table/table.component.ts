import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services';
import * as d3 from 'd3';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(public service: DataService) { }

  ngOnInit() {
    this.service.takeDates();
  }
  // openForm() {
  //
  // }

}

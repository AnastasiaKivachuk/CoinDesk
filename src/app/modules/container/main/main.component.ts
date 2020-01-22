import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState, dataSelectors} from '../../store';
import {Data} from '../../models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public objAllData: Observable<{}>;
  public format: {};

  constructor(
    private store: Store<AppState>
  ) {

    this.objAllData = this.store.select(dataSelectors.getAllData);
  }

  ngOnInit() {
    this.objAllData.subscribe(data => {
      this.format = data;
    });
  }
}

import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private mainUrl = environment.mainUrl;
  constructor(public router: Router,
              private route: ActivatedRoute,
              private http: HttpClient) { }

  takeDates() {
    // const {dateStart, dateEnd} = dates;
    // return this.http.get(`${this.mainUrl}feed?start=${dateStart}&end=${dateEnd}`);
    return this.http.get(`${this.mainUrl}feed?start=2017-12-31&end=2018-11-02`);
  }
}

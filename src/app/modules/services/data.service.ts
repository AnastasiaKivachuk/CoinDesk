import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private mainUrl = environment.mainUrl;
  constructor(public router: Router,
              private route: ActivatedRoute,
              private http: HttpClient) { }

  takeDates(dates) {
    const {dateStart, dateEnd} = dates;
    return this.http.get(`${this.mainUrl}start=${dateStart}&end=${dateEnd}`);
  }


  getMargins = (marginLeft: number, marginTop: number): string => `translate(${marginLeft}, ${marginTop})`;

  getTooltipXPosition(mousePosition, cartSize) {
    return mousePosition > cartSize / 2 ? mousePosition - 210 : mousePosition + 10;
  }
}

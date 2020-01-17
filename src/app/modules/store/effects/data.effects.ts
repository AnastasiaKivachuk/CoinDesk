import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mapTo, switchMap, withLatestFrom} from 'rxjs/operators';
import {Store} from '@ngrx/store';

import * as dataActions from '../action/data.action';
import {AppState} from '../app.state';
import {objDate} from '../selector/data.selectors';
import {DataService} from '../../services';
import {DataResponse, Coins, Data} from '../../models';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class DataEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private rootService: DataService,
  ) {
  }

  @Effect()
  changeData$ = this.actions$.pipe(
    ofType(dataActions.START_END_DATE),
    mapTo(new dataActions.Fetch()),
  );

  @Effect()
  getData$ = this.actions$.pipe(
    ofType(dataActions.FETCH),
    withLatestFrom(this.store.select(objDate)),
    switchMap((dates): Actions => this.rootService.takeDates()
      .pipe(
        map((response: DataResponse) => {
          const dataObject = Object.keys(response.bpi)
            .reduce((data: Data, date: string) =>
              Object.assign(data, {
                [date]: response.bpi[date]
                  .map((coins: Coins) => {
                    const {date, value} = coins;
                    return {date, value};
                  })
              }), {});
          return new dataActions.Success(dataObject);
        }),
        catchError(() => of(new dataActions.Error('some error')))
      )
    ),
  );
}

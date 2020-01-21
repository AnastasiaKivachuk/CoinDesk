import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mapTo, switchMap, withLatestFrom} from 'rxjs/operators';
import {Store} from '@ngrx/store';

import * as dataActions from '../action/data.action';
import {AppState} from '../app.state';
import {objDate} from '../selector/data.selectors';
import {DataService} from '../../services';
// import {DataResponse, Asteroid, Data} from '../../models';

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
    switchMap((dates): Actions => this.rootService.takeDates(dates)
      .pipe(
        map((response: any) => {
          const dataObject = Object.keys(response.bpi).map(item2 => {
            return {day: item2, value: response.bpi[item2]};
          });
          return new dataActions.Success(dataObject);
        }),
        catchError(() => of(new dataActions.Error('some error')))
      )
    ),
  );
}

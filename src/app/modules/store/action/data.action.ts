import {Action} from '@ngrx/store';

export const FETCH = '[stars] Fetch';
export const ERROR = '[stars] Error';
export const SUCCESS = '[stars] Success';
export const START_END_DATE = '[stars] Change StartDate';

export class Fetch implements Action {
  readonly type = FETCH;
}

export class Error implements Action {
  readonly type = ERROR;

  constructor(public payload: string) {
  }
}

export class Success implements Action {
  readonly type = SUCCESS;

  constructor(public payload: {}) {
  }
}

export class ChangeStartEndDate implements Action {
  readonly type = START_END_DATE;

  constructor(public payload: {}) {
  }
}


export type Actions = Fetch | Error | Success | ChangeStartEndDate ;

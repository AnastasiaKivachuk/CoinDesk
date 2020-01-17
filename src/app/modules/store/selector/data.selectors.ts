import {createSelector, createFeatureSelector} from '@ngrx/store';

import {State} from '../../models';
import * as fromData from '../reducers/data.reducer';

export const getState =
  createFeatureSelector<State>('storeData');


export const objDate = createSelector(
  getState,
  fromData.getStartEndDate,
);

export const getDate = createSelector(
  getState,
  fromData.getData,
);

export const getDataStatus = createSelector(
  getState,
  fromData.getStatus,
);

// export const getDateSelected = createSelector(
//   getState,
//   fromData.getSelectedDate,
// );
//
// export const getFilteredData = createSelector(
//   getDateSelected,
//   getDate,
//   (key = '', obj = {}) => obj ? obj[key] : null
// );

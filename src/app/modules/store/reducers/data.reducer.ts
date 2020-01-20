import {State} from '../../models';
import * as StoreDataAction from '../action/data.action';

const initialState: State = {
    isFetching: false,
    error: '',
    data: null,
    startEndDate: {dateStart: null, dateEnd: null},
  }
;

export function reducer(state: State = initialState, action: StoreDataAction.Actions) {
  switch (action.type) {
    case StoreDataAction.FETCH:
      return {
        ...state,
        isFetching: true,
        error: '',
        data: null,
      };

    case StoreDataAction.ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
        // selectedDate: null
      };

    case StoreDataAction.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        // selectedDate: action.payload ? Object.keys(action.payload)[0] : ''
      };

    case StoreDataAction.START_END_DATE:
      return {
        ...state,
        startEndDate: action.payload
      };


    default:
      return state;
  }
}

export const getStartEndDate = (state: State) => state.startEndDate;
export const getData = (state: State) => state.data;
export const getStatus = (state: State) => state.isFetching;


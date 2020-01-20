// import {Data} from './data.model';
import {DateModel} from './date.model';

export interface State {
  isFetching: boolean;
  error: string;
  data: string;
  startEndDate: DateModel;
}

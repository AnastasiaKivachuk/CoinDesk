// import {async, getTestBed, TestBed} from '@angular/core/testing';
// import {MockStore, provideMockStore} from '@ngrx/store/testing';
// import {dataSelectors} from './index';
// import {State} from '../../models';
//
// let store: MockStore<{
//   DateModel
// }>;
//
// const initialState = {
//   storeData: {
//     isFetching: false,
//     startEndDate: {
//       dateStart: '2019-12-05',
//       dateEnd: '2019-12-05'
//     },
//     data: {
//       '2019-12-05': [
//         {id: '3893382', name: '(2019 WW)'},
//         {id: '3767159', name: '(2017 BJ30)'},
//         {id: '3794980', name: '(2017 YU1)'},
//         {id: '2308242', name: '308242 (2005 GO21)'},
//         {id: '3399085', name: '(2008 AF3)'},
//         {id: '3448992', name: '(2009 DD45)'},
//         {id: '3840123', name: '(2019 FD)'},
//         {id: '3893213', name: '(2019 VS5)'}],
//     },
//     selectedDate: '2019-12-05',
//     error: ''
//   }
// };
// describe('Selectors', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         provideMockStore({initialState})
//       ],
//     });
//   });
//
//   it('should work selector getState', () => {
//     const dataInfObjDate = initialState.storeData;
//     expect(dataSelectors.getState(initialState)).toBe(dataInfObjDate);
//
//   });
//
//   it('should work selector objDate', () => {
//     expect(dataSelectors.objDate(initialState)).toBe(initialState.storeData.startEndDate);
//   });
//
//   it('should work selector getDate', () => {
//     expect(dataSelectors.getDate(initialState)).toBe(initialState.storeData.data);
//   });
//
//   it('should work selector getDataStatus', () => {
//     expect(dataSelectors.getDataStatus(initialState)).toBe(initialState.storeData.isFetching);
//   });
//
//   it('should work selector getDateSelected', () => {
//     expect(dataSelectors.getDateSelected(initialState)).toBe(initialState.storeData.selectedDate);
//   });
//   it('should work selector getFilteredData', () => {
//     expect(dataSelectors.getFilteredData(initialState)).toBe(initialState.storeData.data['2019-12-05']);
//   });
// })

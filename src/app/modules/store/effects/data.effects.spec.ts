// import {DataEffects} from './data.effects';
// import {getTestBed, TestBed} from '@angular/core/testing';
// import {provideMockActions} from '@ngrx/effects/testing';
// import {cold, hot} from 'jasmine-marbles';
// import {Observable} from 'rxjs';
// import * as dataActions from '../action/data.action';
// import {RouterTestingModule} from '@angular/router/testing';
// import {DataService} from '../../service';
// import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
// import {Data, DataResponse} from '../../models';
// import {MockStore, provideMockStore} from '@ngrx/store/testing';
//
// describe('My Effects', () => {
//   let effects: DataEffects;
//   let actions: Observable<any>;
//   let injector: TestBed;
//   let service: jasmine.SpyObj<DataService>;
//   let httpMock: HttpTestingController;
//   let store: MockStore<{
//     DateModel
//   }>;
//   const initialState = {
//     storeData: {startEndDate : {
//       dateStart: '2019-12-05',
//       dateEnd: '2019-12-05'
//     }}
//   };
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         HttpClientTestingModule,
//         RouterTestingModule
//       ],
//       providers: [
//         DataService,
//         DataEffects,
//         provideMockStore({ initialState }),
//         provideMockActions(() => actions),
//         {
//           provide: DataService,
//           useValue: {takeDates: jasmine.createSpy()}
//         }
//       ],
//     });
//
//     effects = TestBed.get(DataEffects);
//     injector = getTestBed();
//     service = TestBed.get(DataService);
//     httpMock = TestBed.get(HttpTestingController);
//   });
//
//   it('should work effect', () => {
//
//     const dataFromService: DataResponse = {
//       near_earth_objects: {
//         ['2019-12 - 05']: [
//           {id: '3893382', name: '(2019 WW)'},
//           {id: '3767159', name: '(2017 BJ30)'},
//           {id: '3794980', name: '(2017 YU1)'},
//           {id: '2308242', name: '308242 (2005 GO21)'},
//           {id: '3399085', name: '(2008 AF3)'},
//           {id: '3448992', name: '(2009 DD45)'},
//           {id: '3840123', name: '(2019 FD)'},
//           {id: '3893213', name: '(2019 VS5)'}],
//       },
//     };
//
//     const dataInf: Data = {
//       '2019-12 - 05':
//         [
//           {id: '3893382', name: '(2019 WW)'},
//           {id: '3767159', name: '(2017 BJ30)'},
//           {id: '3794980', name: '(2017 YU1)'},
//           {id: '2308242', name: '308242 (2005 GO21)'},
//           {id: '3399085', name: '(2008 AF3)'},
//           {id: '3448992', name: '(2009 DD45)'},
//           {id: '3840123', name: '(2019 FD)'},
//           {id: '3893213', name: '(2019 VS5)'}]
//     };
//
//     const action = new dataActions.Fetch();
//     const completion = new dataActions.Success(dataInf);
//     actions = hot('-a', {a: action});
//     const response = cold('-a|', {a: dataFromService});
//     service.takeDates.and.returnValue(response);
//     const expected = cold('--b', {b: completion});
//     expect(effects.getData$).toBeObservable(expected);
//   });
//
//   it('fail effect', () => {
//     const dataFromService = 'some error';
//     const dataInf: Data = {
//       '2019-12 - 05':
//         [
//           {id: '3893382', name: '(2019 WW)'},
//           {id: '3767159', name: '(2017 BJ30)'},
//           {id: '3794980', name: '(2017 YU1)'},
//           {id: '2308242', name: '308242 (2005 GO21)'},
//           {id: '3399085', name: '(2008 AF3)'},
//           {id: '3448992', name: '(2009 DD45)'},
//           {id: '3840123', name: '(2019 FD)'},
//           {id: '3893213', name: '(2019 VS5)'}]
//     };
//
//     const action = new dataActions.Fetch();
//     const completion = new dataActions.Error('some error');
//     actions = hot('-a', {a: action});
//     const response = cold('-a|', {a: dataFromService});
//     service.takeDates.and.returnValue(response);
//     const expected = cold('--b', {b: completion});
//     expect(effects.getData$).toBeObservable(expected);
//   });
// });

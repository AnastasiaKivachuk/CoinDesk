import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {AppState, dataSelectors, dataActions} from '../../store';
import {DateModel} from '../../models';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public myForm: FormGroup;
  public isFetching$: Observable<boolean>;
  private dateStartEnd$: Observable<DateModel>;
  constructor(
    private store: Store<AppState>
  ) {
    this.dateStartEnd$ = store.select(dataSelectors.objDate);
    this.isFetching$ = store.select(dataSelectors.getDataStatus);

  }

  ngOnInit() {
    this.initForm();
    this.dateStartEnd$.subscribe((dates: DateModel) => {
      const {dateStart, dateEnd} = dates;
      this.myForm.setValue({dateStart, dateEnd})
    });
  }

  initForm() {
    this.myForm = new FormGroup({
      dateStart: new FormControl('', Validators.required),
      dateEnd: new FormControl('', Validators.required),
    },
      {validators: this.periodValidator}
      );
  }

  submit() {
    this.store.dispatch(new dataActions.ChangeStartEndDate(this.myForm.value));
  }

  periodValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const dateStart = new Date(control.get('dateStart').value).getTime();
    const dateEnd = new Date(control.get('dateEnd').value).getTime();
    const period = dateEnd - dateStart;

    return period < 0 ? {periodValidation: true} : null;
  }

  checkTouched() {
    const controls = this.myForm.controls;
    return Object.keys(controls)
      .every(controlName => controls[controlName].touched);
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './modules/components/form/form.component';
import { TableComponent } from './modules/components/table/table.component';
import { MainComponent } from './modules/container/main/main.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DataService} from './modules/services';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
// import {DataEffects} from './modules/store/effects';
import {reducer} from './modules/store/reducers/data.reducer';
import {ButtonWithSpinnerComponent, SpinnerForButtonComponent} from './modules/components/button-with-spinner';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {DataEffects} from './modules/store/effects';
import {LetDirective} from './modules/directives';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    MainComponent,
    ButtonWithSpinnerComponent,
    SpinnerForButtonComponent,
    LetDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    EffectsModule,
    HttpClientModule,
    StoreModule.forRoot({
      storeData: reducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([DataEffects])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

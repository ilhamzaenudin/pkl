import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CobaComponent } from './coba/coba.component';
import { FormComponent } from './form/form.component';
import { DetailKelasComponent } from './detail-kelas/detail-kelas.component';

@NgModule({
  declarations: [
    AppComponent,
    CobaComponent,
    FormComponent,
    DetailKelasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CobaComponent } from './coba/coba.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'coba', component: CobaComponent },
  { path: 'form', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

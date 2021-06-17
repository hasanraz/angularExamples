import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccinationFormComponent } from './components/vaccination-form/vaccination-form.component';

const routes: Routes = [
  {path: 'state', component: VaccinationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

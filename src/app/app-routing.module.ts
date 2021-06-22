import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotAvailableComponent } from './components/not-available/not-available.component';
import { SubhomeComponent } from './components/subhome/subhome.component';
import { Subhome2Component } from './components/subhome2/subhome2.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, children : [
    {path: 'subhome', component: SubhomeComponent},
    {path: 'subhome2', component: Subhome2Component},
  ]},
  {path: 'contact', component: ContactsComponent},
  {path: '**', component: NotAvailableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

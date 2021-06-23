import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavComponent } from './components/nav/nav.component';
import { NotAvailableComponent } from './components/not-available/not-available.component';
import { SubhomeComponent } from './components/subhome/subhome.component';
import { Subhome2Component } from './components/subhome2/subhome2.component';
import { CaurosalComponent } from './components/caurosal/caurosal.component';
import { TimePickerComponent } from './components/time-picker/time-picker.component';
import { FormsModule } from '@angular/forms';
import { SolidborderDirective } from './directives/solidborder.directive';
import { WelcomePipe } from './pipes/welcome.pipe';
import { SumComponent } from './components/sum/sum.component';
import { AddService } from './service/add.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    NavComponent,
    NotAvailableComponent,
    SubhomeComponent,
    Subhome2Component,
    CaurosalComponent,
    TimePickerComponent,
    SolidborderDirective,
    WelcomePipe,
    SumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [AddService],
  bootstrap: [AppComponent]
})
export class AppModule { }

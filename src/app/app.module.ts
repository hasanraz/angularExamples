import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './feature/home/home.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingComponent } from './components/setting/setting.component';
import { SampleService } from './services/sample.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';




@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    NavbarComponent,
    ContactComponent,
    RegistrationComponent,
    ProfileComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    SharedModule,
    BrowserAnimationsModule,
    MatDatepickerModule
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

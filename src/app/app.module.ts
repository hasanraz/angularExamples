import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VaccinationFormComponent } from './components/vaccination-form/vaccination-form.component';
import { FormsModule } from '@angular/forms';
import { VacchildComponent } from './components/vacchild/vacchild.component';

@NgModule({
  declarations: [
    AppComponent,
    VaccinationFormComponent,
    VacchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

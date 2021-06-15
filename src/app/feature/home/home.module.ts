import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { BannerComponent } from './component/banner/banner.component';
import { HomeChildComponent } from './component/home-child/home-child.component';
import { HomeComponent } from './component/home/home.component';


@NgModule({
  declarations: [
    BannerComponent,
    HomeChildComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }

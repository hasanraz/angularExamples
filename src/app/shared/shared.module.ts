import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HellopipePipe } from './../pipes/hellopipe.pipe';
import { DollarPipe } from './../pipes/dollar.pipe';
import { AppRoundBlockDirective } from './../directives/app-round-block.directive';
import { ErrorComponent } from './components/error/error.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [HellopipePipe, DollarPipe, AppRoundBlockDirective, ErrorComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [HellopipePipe, DollarPipe, AppRoundBlockDirective, ErrorComponent, MatCardModule,
    MatButtonModule]
})
export class SharedModule { }

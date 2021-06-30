import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParagraphComponent } from './paragraph/paragraph.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'p', component: ParagraphComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
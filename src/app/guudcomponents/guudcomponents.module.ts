import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './menu/topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    TopbarComponent,
    FooterComponent
  ],
  exports: [
    TopbarComponent ,
    FooterComponent   
  ],
  imports: [
    CommonModule
  ]
})
export class GuudcomponentsModule { }

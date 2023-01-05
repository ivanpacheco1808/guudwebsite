import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainviewComponent } from './mainview/mainview.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OurcienceComponent } from './ourcience/ourcience.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    MainviewComponent,
    AboutusComponent,
    OurcienceComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }

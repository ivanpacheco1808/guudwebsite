import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { MainviewComponent } from './mainview/mainview.component';

import { AboutusComponent } from './aboutus/aboutus.component';
import { CaringComponent } from './caring/caring.component';
import { CoachComponent } from './coach/coach.component';
import { HistoryComponent } from './history/history.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SustainabilityComponent } from './sustainability/sustainability.component';


@NgModule({
  declarations: [
    MainviewComponent,

    AboutusComponent,
    CaringComponent,
    CoachComponent,
    HistoryComponent,
    SupplierComponent,
    SustainabilityComponent,
  ],
  exports: [
    MainviewComponent,

    AboutusComponent,
    CaringComponent,
    CoachComponent,
    HistoryComponent,
    SupplierComponent,
    SustainabilityComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ViewsModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { GuudcomponentsModule } from '@guudcomponents/guudcomponents.module';

import { MainviewComponent } from './mainview/mainview.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CaringComponent } from './caring/caring.component';
import { CoachComponent } from './coach/coach.component';
import { HistoryComponent } from './history/history.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SustainabilityComponent } from './sustainability/sustainability.component';
import { GuudideasComponent } from './guudideas/guudideas.component';
import { TerminosComponent } from './terminos/terminos.component';
import { DeleteaccComponent } from './deleteacc/deleteacc.component';

import { WelcomeComponent } from './tutorials/welcome/welcome.component';
import { TipsComponent } from './tutorials/tips/tips.component';
import { SportsComponent } from './tutorials/sports/sports.component';
import { CalendarsComponent } from './tutorials/calendars/calendars.component';
import { WorkoutsComponent } from './tutorials/workouts/workouts.component';
import { ProductsComponent } from './products/products.component';
import { SupplementsComponent } from './products/supplements/supplements.component';
import { SkincareComponent } from './products/skincare/skincare.component';


@NgModule({
  declarations: [
    MainviewComponent,

    AboutusComponent,
    CaringComponent,
    CoachComponent,
    HistoryComponent,
    SupplierComponent,
    SustainabilityComponent,
    GuudideasComponent,
    TerminosComponent,
    DeleteaccComponent,
    WelcomeComponent,
    TipsComponent,
    SportsComponent,
    CalendarsComponent,
    WorkoutsComponent,
    ProductsComponent,
    SupplementsComponent,
    SkincareComponent,
  ],
  exports: [
    MainviewComponent,

    AboutusComponent,
    CaringComponent,
    CoachComponent,
    HistoryComponent,
    SupplierComponent,
    SustainabilityComponent,
    GuudideasComponent,
    TerminosComponent,
    DeleteaccComponent,
    WelcomeComponent,
    TipsComponent,
    SportsComponent,
    CalendarsComponent,
    WorkoutsComponent,
    ProductsComponent,
    SupplementsComponent,
    SkincareComponent,
  ],
  imports: [
    CommonModule,
    GuudcomponentsModule,
    RouterModule
  ]
})
export class ViewsModule { }

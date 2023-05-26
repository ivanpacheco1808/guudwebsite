import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { TopbarComponent } from './menu/topbar/topbar.component';
import { BurguermenuComponent } from './menu/burguermenu/burguermenu.component';
import { LangmenuComponent } from './menu/langmenu/langmenu.component';

import { ModalesComponent } from './modales/modales.component';
import { FooterComponent } from './footer/footer.component';

import { ImageplacerComponent } from './individuales/imageplacer/imageplacer.component';

import { BeCoachComponent } from './formularios/becoach/becoach.component';
import { BeSupplierComponent } from './formularios/besupplier/besupplier.component';
import { GuudideaComponent } from './formularios/guudidea/guudidea.component';


@NgModule({
  declarations: [
    TopbarComponent,
    BurguermenuComponent,

    FooterComponent,
    ModalesComponent,

    ImageplacerComponent,
    BeCoachComponent,
    BeSupplierComponent,
    LangmenuComponent,
    GuudideaComponent,
  ],
  exports: [
    TopbarComponent,
    BurguermenuComponent,

    FooterComponent,
    ModalesComponent,

    ImageplacerComponent,
    BeCoachComponent,
    BeSupplierComponent,
    LangmenuComponent,
    GuudideaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class GuudcomponentsModule { }

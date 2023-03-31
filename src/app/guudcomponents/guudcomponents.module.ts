import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { TopbarComponent } from './menu/topbar/topbar.component';
import { BurguermenuComponent } from './menu/burguermenu/burguermenu.component';

import { FooterComponent } from './footer/footer.component';

import { ImageplacerComponent } from './individuales/imageplacer/imageplacer.component';
import { BeCoachComponent } from './formularios/becoach/becoach.component';
import { BeSupplierComponent } from './formularios/besupplier/besupplier.component';


@NgModule({
  declarations: [
    TopbarComponent,
    BurguermenuComponent,

    FooterComponent,

    ImageplacerComponent,
    BeCoachComponent,
    BeSupplierComponent,
  ],
  exports: [
    TopbarComponent,
    BurguermenuComponent,

    FooterComponent,

    ImageplacerComponent,
    BeCoachComponent,
    BeSupplierComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class GuudcomponentsModule { }

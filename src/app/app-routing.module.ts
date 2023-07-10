import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainviewComponent } from '@views/mainview/mainview.component';

import { AboutusComponent } from '@views/aboutus/aboutus.component';
import { CaringComponent } from '@views/caring/caring.component';
import { CoachComponent } from '@views/coach/coach.component';
import { HistoryComponent } from '@views/history/history.component';
import { SupplierComponent } from '@views/supplier/supplier.component';
import { SustainabilityComponent } from '@views/sustainability/sustainability.component';
import { GuudideasComponent } from '@views/guudideas/guudideas.component';
import { TerminosComponent } from '@views/terminos/terminos.component';

const routes: Routes = [
  { path: '', component: MainviewComponent },

  { path: 'aboutus', component: AboutusComponent },
  { path: 'caring', component: CaringComponent },
  { path: 'coach', component: CoachComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'supplier', component: SupplierComponent },
  { path: 'guudideas', component: GuudideasComponent },
  { path: 'terminos', component: TerminosComponent },

  //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

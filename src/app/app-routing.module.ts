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
import { DeleteaccComponent } from '@views/deleteacc/deleteacc.component';

//TUTORIALES - TUTORIALES - TUTORIALES - TUTORIALES - TUTORIALES - TUTORIALES
import { WelcomeComponent } from '@views/tutorials/welcome/welcome.component';
import { CalendarsComponent } from '@views/tutorials/calendars/calendars.component';
import { TipsComponent } from '@views/tutorials/tips/tips.component';
import { WorkoutsComponent } from '@views/tutorials/workouts/workouts.component';
import { SportsComponent } from '@views/tutorials/sports/sports.component';

//PRODUCTOS - PRODUCTOS - PRODUCTOS - PRODUCTOS - PRODUCTOS - PRODUCTOS - PRODUCTOS
import { ProductsComponent } from '@views/products/products.component';
import { SupplementsComponent } from '@views/products/supplements/supplements.component';
import { SkincareComponent } from '@views/products/skincare/skincare.component';


const routes: Routes = [
  { path: '', component: MainviewComponent },

  { path: 'aboutus', component: AboutusComponent },
  { path: 'caring', component: CaringComponent },
  { path: 'coach', component: CoachComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'supplier', component: SupplierComponent },
  { path: 'guudideas', component: GuudideasComponent },
  { path: 'terminos', component: TerminosComponent },
  { path: 'delete-account', component: DeleteaccComponent },

  { path: 'welcome', component: WelcomeComponent },
  { path: 'calendars', component: CalendarsComponent },
  { path: 'tips', component: TipsComponent },
  { path: 'workouts', component: WorkoutsComponent },
  { path: 'sports', component: SportsComponent },

  { path: 'productos', component: ProductsComponent },
  { path: 'productos/suplementos', component: SupplementsComponent },
  { path: 'productos/skincare', component: SkincareComponent },


  //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

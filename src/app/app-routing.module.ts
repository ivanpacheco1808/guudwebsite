import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainviewComponent } from '@views/mainview/mainview.component';

const routes: Routes = [
  { path: '', component: MainviewComponent },

  //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
  //{ path: '**', component: Err404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

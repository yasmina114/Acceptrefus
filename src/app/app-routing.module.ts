import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccepterDemandeReservationComponent } from './accepter-demande-reservation/accepter-demande-reservation.component';

const routes: Routes = [
  {path:"",component:AccepterDemandeReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, Input } from '@angular/core';
import { Trajet } from '../trajet';
import { Passager } from '../passager';
@Component({
  selector: 'app-accepter-demande-reservation',
  templateUrl: './accepter-demande-reservation.component.html',
  styleUrls: ['./accepter-demande-reservation.component.css']
})
export class AccepterDemandeReservationComponent {
  @Input() trajet!: Trajet;
  @Input() passager!: Passager;

  accepter() {
// Envoyer une demande de réservation acceptée au passager et mettre à jour la liste des passagers du trajet

  // Envoyer une notification ou un message explicite au passager
  const message = 'Votre demande de réservation a été acceptée pour le trajet ' + '.';
  alert(message);

  // Mettre à jour la liste des passagers du trajet
  this.trajet.passagers.push(this.passager);  }

  refuser() {
 // Envoyer une demande de réservation refusée au passager

  // Envoyer une notification ou un message explicite au passager
  const message = 'Votre demande de réservation a été refusée pour le trajet ' +  '.';
  alert(message);  }

}

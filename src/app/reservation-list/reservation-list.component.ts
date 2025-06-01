//me
// import { Component, OnInit } from '@angular/core';
// import { ReservationModel } from '../reservation-model';
// import { ReservationServiceService } from '../reservation-service.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-reservation-list',
//   templateUrl: './reservation-list.component.html',
//   styleUrl: './reservation-list.component.css'
// })
// export class ReservationListComponent implements OnInit{
//   reservationsInList: ReservationModel[]=[];
//   constructor(private reservationService :ReservationServiceService, private router: Router){}
//   ngOnInit(): void {
//     this.reservationsInList= this.reservationService.getReservations();
//   }
//   updateReservation(id:number){
//     console.log("Update",id);
//     this.reservationService.getReservation(id);
//     this.router.navigate(['/update', id]);
//   }
//   deleteReservation(id:number){
//     console.log("Delete",id);
//     this.reservationService.deleteReservation(id);
//   }
// }

//gemini
import { Component, OnInit } from '@angular/core';
import { ReservationModel } from '../reservation-model';
import { ReservationServiceService } from '../reservation-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'; // Import Observable

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css'] // Corrected styleUrl to styleUrls
})
export class ReservationListComponent implements OnInit {
  // reservationsInList: ReservationModel[] = []; // No longer needed if using async pipe or direct subscription
  reservations$: Observable<ReservationModel[]>; // Use an Observable to hold the reservations

  constructor(private reservationService: ReservationServiceService, public router: Router) {
    // Initialize the observable in the constructor
    this.reservations$ = this.reservationService.getReservations();
  }

  ngOnInit(): void {
    // We can directly subscribe here or use the async pipe in the template.
    // Using async pipe is generally preferred for simpler templates.
    // If you need to perform side effects or complex transformations, subscribe here.
    // For now, let's just ensure the observable is set up.
    // If you want to directly assign to an array, you would do:
    // this.reservationService.getReservations().subscribe(data => {
    //   this.reservationsInList = data;
    // });
  }

  /**
   * Navigates to the reservation form for updating an existing reservation.
   * @param id The ID of the reservation to update.
   */
  updateReservation(id: number): void {
    console.log("Navigating to update reservation with ID:", id);
    // The form component will fetch the reservation details based on the ID in the route.
    this.router.navigate(['/update', id]);
  }

  /**
   * Deletes a reservation and then re-fetches the list to reflect the change.
   * @param id The ID of the reservation to delete.
   */
  deleteReservation(id: number): void {
    console.log("Attempting to delete reservation with ID:", id);
    this.reservationService.deleteReservation(id);
    // After deletion, re-fetch the reservations to update the list
    this.reservations$ = this.reservationService.getReservations();
  }
}

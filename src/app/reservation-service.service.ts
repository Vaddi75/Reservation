//me
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { ReservationModel } from './reservation-model';

// @Injectable({
//   providedIn: 'root'
// })
// export class ReservationServiceService {

//   reservationsInServive:ReservationModel[]=[];

//   constructor(private router: Router) {
//     const reservationsInLocalStorage=localStorage.getItem("Reservations");
//     this.reservationsInServive=(reservationsInLocalStorage)?JSON.parse(reservationsInLocalStorage):[]
//    }

//   //CRUD

//   //Create
//   addReservation(newReservation:ReservationModel):void{
//     this.reservationsInServive.push(newReservation);
//     console.log(this.reservationsInServive.length);
//     //As there is a change in the array of reservations we have to update the local storage aswell
//     localStorage.setItem("Reservations",JSON.stringify(this.reservationsInServive));
//   }

//   //Read
//   getReservations(): ReservationModel[]{
//     return this.reservationsInServive;
//   }

//   //Update
//   updateReservation(updatedReservation: ReservationModel):void{
//     if(this.reservationsInServive.filter(i=>{i.id==updatedReservation.id})){
//       const index= this.reservationsInServive.findIndex(i=>{i.id==updatedReservation.id})
//       this.reservationsInServive.splice(index,1,updatedReservation);
//       //As there is a change in the array of reservations we have to update the local storage aswell
//       localStorage.setItem("Reservations",JSON.stringify(this.reservationsInServive));
//     }
//   }

//   //Delete
//   deleteReservation(idSent:number):void{
//     if(this.reservationsInServive.filter(i=>{i.id==idSent})){
//       console.log(this.reservationsInServive.filter(i=>{i.id==idSent}))
//       const index= this.reservationsInServive.findIndex(i=>{i.id==idSent})
//       console.log(this.reservationsInServive[index]);
//       this.reservationsInServive.splice(index,1);
//       //As there is a change in the array of reservations we have to update the local storage aswell
//       localStorage.setItem("Reservations",JSON.stringify(this.reservationsInServive));
//       console.log("Deleted",idSent, this.reservationsInServive.length);
//       this.router.navigate(['/bookings'])

//     }
//   }

//   //ReadSpecific
//   getReservation(idSent:number){
//     // console.log(idSent);
//     // const reservation=this.reservationsInServive.filter(i=>{i.id==idSent});
//     // console.log(reservation);
//     // return reservation[0];
//     // if(this.reservationsInServive.filter(i=>{i.id==idSent})){
//     //   const index= this.reservationsInServive.findIndex(i=>{i.id==idSent})
//     //   const reservation=this.reservationsInServive[index]
//     //   return reservation;
//     // }
//     // else return [];
//     const foundReservation = this.reservationsInServive.find(reservation => reservation.id === idSent);
//     console.log(foundReservation);
//     return foundReservation;

//   }

// }

//gemini
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs'; // Import Observable and 'of'
import { ReservationModel } from './reservation-model';

@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {

  reservationsInServive: ReservationModel[] = [];

  constructor(private router: Router) {
    const reservationsInLocalStorage = localStorage.getItem("Reservations");
    // Parse JSON from local storage; if null, default to an empty array
    this.reservationsInServive = (reservationsInLocalStorage) ? JSON.parse(reservationsInLocalStorage) : [];
  }

  // CRUD Operations

  /**
   * Adds a new reservation to the service and updates local storage.
   * @param newReservation The ReservationModel object to add.
   */
  addReservation(newReservation: ReservationModel): void {
    this.reservationsInServive.push(newReservation);
    console.log('Added reservation. Total reservations:', this.reservationsInServive.length);
    // Update local storage after adding
    this.saveReservationsToLocalStorage();
  }

  /**
   * Retrieves all reservations as an Observable.
   * @returns An Observable emitting an array of ReservationModel objects.
   */
  getReservations(): Observable<ReservationModel[]> {
    return of(this.reservationsInServive); // Wrap the array in an Observable
  }

  /**
   * Updates an existing reservation in the service and local storage.
   * @param updatedReservation The ReservationModel object with updated details.
   */
  updateReservation(updatedReservation: ReservationModel): void {
    // Find the index of the reservation to update
    const index = this.reservationsInServive.findIndex(i => i.id === updatedReservation.id);

    // If the reservation is found, update it
    if (index !== -1) {
      this.reservationsInServive[index] = updatedReservation;
      console.log('Reservation updated:', updatedReservation);
      // Update local storage after updating
      this.saveReservationsToLocalStorage();
    } else {
      console.warn(`Reservation with ID ${updatedReservation.id} not found for update.`);
    }
  }

  /**
   * Deletes a reservation by its ID from the service and local storage.
   * @param idSent The ID of the reservation to delete.
   */
  deleteReservation(idSent: number): void {
    // // Find the index of the reservation to delete
    // const index = this.reservationsInServive.findIndex(i => i.id === idSent);

    // // If the reservation is found, delete it
    // if (index !== -1) {
    //   const deletedReservation = this.reservationsInServive.splice(index, 1);
    //   console.log('Deleted reservation:', deletedReservation[0]);
    //   console.log('Total reservations after deletion:', this.reservationsInServive.length);
    //   // Update local storage after deletion
    //   this.saveReservationsToLocalStorage();
    //   // Navigate to bookings after deletion (if this is desired behavior)
    //   this.router.navigate(['/bookings']);
    // } else {
    //   console.warn(`Reservation with ID ${idSent} not found for deletion.`);
    // }
    const foundReservation = this.reservationsInServive.find(reservation => reservation.id === idSent);
    if (foundReservation) {
      const reservations: ReservationModel[] = this.reservationsInServive.filter(reservation => reservation !== foundReservation);
      this.reservationsInServive = reservations;
      this.saveReservationsToLocalStorage();
    }else{
      console.warn(`Reservation with ID ${idSent} not found for deletion.`);
    }
  }

  /**
   * Retrieves a specific reservation by its ID as an Observable.
   * @param idSent The ID of the reservation to retrieve.
   * @returns An Observable emitting the found ReservationModel object or undefined if not found.
   */
  getReservation(idSent: number): Observable<ReservationModel | undefined> {
    const foundReservation = this.reservationsInServive.find(reservation => reservation.id === idSent);
    console.log('Found reservation for ID', idSent, ':', foundReservation);
    return of(foundReservation); // Wrap the result in an Observable
  }

  /**
   * Private helper method to save the current state of reservations to local storage.
   */
  private saveReservationsToLocalStorage(): void {
    localStorage.setItem("Reservations", JSON.stringify(this.reservationsInServive));
  }
}

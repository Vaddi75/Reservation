import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationModel } from './reservation-model';

@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {

  reservationsInServive:ReservationModel[]=[];

  constructor(private router: Router) {
    const reservationsInLocalStorage=localStorage.getItem("Reservations");
    this.reservationsInServive=(reservationsInLocalStorage)?JSON.parse(reservationsInLocalStorage):[]
   }

  //CRUD

  //Create
  addReservation(newReservation:ReservationModel):void{
    this.reservationsInServive.push(newReservation);
    console.log(this.reservationsInServive.length);
    //As there is a change in the array of reservations we have to update the local storage aswell
    localStorage.setItem("Reservations",JSON.stringify(this.reservationsInServive));
  }

  //Read
  getReservations(): ReservationModel[]{
    return this.reservationsInServive;
  }

  //Update
  updateReservation(updatedReservation: ReservationModel):void{
    if(this.reservationsInServive.filter(i=>{i.id==updatedReservation.id})){
      const index= this.reservationsInServive.findIndex(i=>{i.id==updatedReservation.id})
      this.reservationsInServive.splice(index,1,updatedReservation);
      //As there is a change in the array of reservations we have to update the local storage aswell
      localStorage.setItem("Reservations",JSON.stringify(this.reservationsInServive));
    }
  }

  //Delete
  deleteReservation(idSent:number):void{
    if(this.reservationsInServive.filter(i=>{i.id==idSent})){
      console.log(this.reservationsInServive.filter(i=>{i.id==idSent}))
      const index= this.reservationsInServive.findIndex(i=>{i.id==idSent})
      console.log(this.reservationsInServive[index]);
      this.reservationsInServive.splice(index,1);
      //As there is a change in the array of reservations we have to update the local storage aswell
      localStorage.setItem("Reservations",JSON.stringify(this.reservationsInServive));
      console.log("Deleted",idSent, this.reservationsInServive.length);
      this.router.navigate(['/bookings'])

    }
  }

  //ReadSpecific
  getReservation(idSent:number){
    // console.log(idSent);
    // const reservation=this.reservationsInServive.filter(i=>{i.id==idSent});
    // console.log(reservation);
    // return reservation[0];
    if(this.reservationsInServive.filter(i=>{i.id==idSent})){
      const index= this.reservationsInServive.findIndex(i=>{i.id==idSent})
      const reservation=this.reservationsInServive[index]
      return reservation;
    }
    else return [];

  }

}

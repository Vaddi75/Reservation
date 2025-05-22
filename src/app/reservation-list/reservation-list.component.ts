import { Component, OnInit } from '@angular/core';
import { ReservationModel } from '../reservation-model';
import { ReservationServiceService } from '../reservation-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent implements OnInit{
  reservationsInList: ReservationModel[]=[];
  constructor(private reservationService :ReservationServiceService, private router: Router){}
  ngOnInit(): void {
    this.reservationsInList= this.reservationService.getReservations();
  }
  update(id:number){
    console.log(this.reservationService.getReservation(id));
    this.router.navigate(['/update', id]);
  }
  delete(id:number){
    console.log("Delete",id);
    this.reservationService.deleteReservation(id);
  }
}

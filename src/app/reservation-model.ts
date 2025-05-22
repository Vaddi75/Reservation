export interface ReservationModel {
  id:number;
  firstName:string;
  lastName:string;
  email:string;
  location:string;
  hotelName:string;
  numberOfGuests:number;
  checkInDate:Date;
  checkOutDate:Date;
}

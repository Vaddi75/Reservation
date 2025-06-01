//me
// import { Component, OnInit } from '@angular/core';
// import { FormControl, NgForm } from '@angular/forms';
// import { Router } from '@angular/router';
// import { ReservationModel } from '../reservation-model';
// import { ReservationServiceService} from '../reservation-service.service'
// import { ActivatedRoute } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-reservation-form',
//   templateUrl: './reservation-form.component.html',
//   styleUrl: './reservation-form.component.css'
// })
// export class ReservationFormComponent  {
//   itemForm: FormGroup;
//   itemId=0
//      formFilled:ReservationModel={
//       id: 0,
//       firstName: '',
//       lastName: '',
//       email: '',
//       location: '',
//       hotelName: '',
//       numberOfGuests: 0,
//       checkInDate: new Date,
//       checkOutDate: new Date
//     }
//   constructor(
//     private fb: FormBuilder,
//     private activatedRoute: ActivatedRoute,
//     private router: Router,
//     private reservationService: ReservationServiceService
//   ) {
//     this.itemForm = this.fb.group({
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       email: ['', Validators.required],
//       location: ['', Validators.required],
//       hotelName: ['', Validators.required],
//       numberOfGuests: [0, Validators.required],
//       checkInDate:[ new Date, Validators.required],
//       checkOutDate:[ new Date, Validators.required]
//     });
//   }

//   ngOnInit(): void {
//     this.itemId =Number( this.activatedRoute.snapshot.paramMap.get('id'));
//     if (this.itemId) {
//         console.log(this.reservationService.getReservation(this.itemId));
//         const reservationToUpdate=this.reservationService.getReservation(this.itemId)
//         this.itemForm.patchValue({
//       firstName: reservationToUpdate?.firstName,
//       lastName: reservationToUpdate?.lastName,
//       email: reservationToUpdate?.email,
//       location: reservationToUpdate?.location,
//       hotelName: reservationToUpdate?.hotelName,
//       numberOfGuests: reservationToUpdate?.numberOfGuests,
//       checkInDate:reservationToUpdate?.checkInDate,
//       checkOutDate:reservationToUpdate?.checkOutDate
//     });
//     }
//   }

//   onSubmit(): void {
//     if (this.itemForm.valid) {
//     this.formFilled.id= Date.now();
//     this.formFilled.firstName=this.itemForm.value.firstName
//     this.formFilled.lastName=this.itemForm.value.lastName
//     this.formFilled.email=this.itemForm.value.email
//     this.formFilled.location=this.itemForm.value.location
//     this.formFilled.hotelName=this.itemForm.value.hotelName
//     this.formFilled.numberOfGuests=this.itemForm.value.numberOfGuests
//     this.formFilled.checkInDate=this.itemForm.value.checkInDate
//     this.formFilled.checkOutDate=this.itemForm.value.checkOutDate


//       if (this.itemId) {
//         this.formFilled.id= Number(this.itemId);
//         this.reservationService.updateReservation(this.formFilled);
//         this.router.navigate(['/bookings']);
//       } else {
//         console.log("Added");
//         this.reservationService.addReservation(this.formFilled)
//           this.router.navigate(['/bookings']);
//       }
//     }
//   }


// //======================================================================================
//   // constructor(private reservationService: ReservationServiceService ,
//   //    private router :Router,
//   //    private acrivateRoute : ActivatedRoute){}
//   //    formInNewBooking:ReservationModel={
//   //     id: 0,
//   //     firstName: '',
//   //     lastName: '',
//   //     email: '',
//   //     location: '',
//   //     hotelName: '',
//   //     numberOfGuests: 0,
//   //     checkInDate: new Date,
//   //     checkOutDate: new Date
//   //   }

//   // ngOnInit(): void {
//   //  const currentPage= this.acrivateRoute.snapshot.paramMap.get("update")
//   //  if(currentPage=="update"){
//   //   console.log("Came for updating")
//   //  }

//   // }




//   // submit(enteredForm: NgForm):void{
//   //   //console.log(enteredForm.value.firstName);
//   // if(enteredForm.valid){
//   //   this.formInNewBooking.id= Date.now();
//   //   this.formInNewBooking.firstName=enteredForm.value.firstName
//   //   this.formInNewBooking.lastName=enteredForm.value.lastName
//   //   this.formInNewBooking.email=enteredForm.value.email
//   //   this.formInNewBooking.location=enteredForm.value.location
//   //   this.formInNewBooking.hotelName=enteredForm.value.hotelName
//   //   this.formInNewBooking.numberOfGuests=enteredForm.value.numberOfGuests
//   //   this.formInNewBooking.checkInDate=enteredForm.value.checkInDate
//   //   this.formInNewBooking.checkOutDate=enteredForm.value.checkOutDate
//   // }
//   // //console.log(this.formInNewBooking.firstName);
//   // //now as we have the reservation form data that is filled by the user we can call the reservation
//   // //service and add to it.
//   // this.reservationService.addReservation(this.formInNewBooking);
//   // //After adding the form to the service lets call the reservation-list component
//   // this.router.navigate(['/bookings']);
//   // enteredForm.reset;
//   // }
// //=================================================================================================
//   //way1
//   // username: string = '';

//   //       onSubmit() {
//   //         console.log(this.username); // Access the form data
//   //         // ... further logic with the form data
//   //       }

//   //way2


//   // onSubmit(formValue: any) {
//   //   console.log(formValue.username); // Access the form data
//   //   // ... further logic with the form data
//   // }

//   //way3

//   // formGroup = new FormGroup({
//   //   username: new FormControl(''),
//   // });

//   // onSubmit() {
//   //   console.log(this.formGroup.value.username); // Access the form data
//   //   // ... further logic with the form data
//   // }

//   //way 4

//   // onSubmit(form: NgForm) {
//   //   const formData = new FormData();
//   //   formData.append('username', form.value.username);

//   //   this.http.post('/api/endpoint', formData).subscribe(response => {
//   //     console.log(response);
//   //   });
// }

//gemini
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ReservationModel } from '../reservation-model';
import { ReservationServiceService } from '../reservation-service.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  itemForm: FormGroup;
  itemId: number = 0;

  formFilled: ReservationModel = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    hotelName: '',
    numberOfGuests: 0,
    checkInDate: new Date(),
    checkOutDate: new Date()
  };

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private reservationService: ReservationServiceService
  ) {
    this.itemForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      location: ['', Validators.required],
      hotelName: ['', Validators.required],
      numberOfGuests: [0, [Validators.required, Validators.min(1)]],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    this.itemId = idParam ? Number(idParam) : 0;

    if (this.itemId) {
      this.reservationService.getReservation(this.itemId).subscribe(
        (reservationToUpdate: ReservationModel | undefined) => {
          if (reservationToUpdate) {
            console.log('Fetched reservation for update:', reservationToUpdate);
            this.itemForm.patchValue({
              firstName: reservationToUpdate.firstName,
              lastName: reservationToUpdate.lastName,
              email: reservationToUpdate.email,
              location: reservationToUpdate.location,
              hotelName: reservationToUpdate.hotelName,
              numberOfGuests: reservationToUpdate.numberOfGuests,
              // Convert Date objects to 'YYYY-MM-DD' strings for HTML date input compatibility
              checkInDate: this.formatDateForInput(reservationToUpdate.checkInDate),
              checkOutDate: this.formatDateForInput(reservationToUpdate.checkOutDate)
            });
          } else {
            console.warn(`Reservation with ID ${this.itemId} not found. Redirecting to bookings.`);
            this.router.navigate(['/bookings']);
          }
        },
        (error: any) => {
          console.error('Error fetching reservation:', error);
          this.router.navigate(['/bookings']);
        }
      );
    }
  }

  /**
   * Helper function to format a Date object into 'YYYY-MM-DD' format
   * suitable for HTML date input fields.
   * @param date The Date object to format.
   * @returns A string in 'YYYY-MM-DD' format, or an empty string if the date is invalid.
   */
  private formatDateForInput(date: Date): string {
    if (!date || isNaN(date.getTime())) {
      return ''; // Return empty string for invalid or null dates
    }
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are 0-indexed
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }


  onSubmit(): void {
    if (this.itemForm.valid) {
      this.formFilled.firstName = this.itemForm.value.firstName;
      this.formFilled.lastName = this.itemForm.value.lastName;
      this.formFilled.email = this.itemForm.value.email;
      this.formFilled.location = this.itemForm.value.location;
      this.formFilled.hotelName = this.itemForm.value.hotelName;
      this.formFilled.numberOfGuests = this.itemForm.value.numberOfGuests;

      // Convert date strings from form (which are 'YYYY-MM-DD' from date inputs) to Date objects for the model
      this.formFilled.checkInDate = new Date(this.itemForm.value.checkInDate);
      this.formFilled.checkOutDate = new Date(this.itemForm.value.checkOutDate);

      if (this.itemId) {
        this.formFilled.id = this.itemId;
        this.reservationService.updateReservation(this.formFilled);
        console.log('Reservation updated successfully:', this.formFilled);
      } else {
        this.formFilled.id = Date.now();
        this.reservationService.addReservation(this.formFilled);
        console.log('New reservation added successfully:', this.formFilled);
      }
      this.router.navigate(['/bookings']);
    } else {
      this.itemForm.markAllAsTouched();
      console.log('Form is invalid. Please check the highlighted fields.');
    }
  }
}

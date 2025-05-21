import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent {

//way 3

  // formGroup = new FormGroup({
  //   username: new FormControl(''),
  // });

  // onSubmit() {
  //   console.log(this.formGroup.value.username); // Access the form data
  //   // ... further logic with the form data
  // }

//---------------------------------------------------------------------

//way 2
  // onSubmit(formValue: any) {
  //   console.log(formValue.username); // Access the form data
  //   // ... further logic with the form data
  // }


//--------------------------------------------------------------------------
  //way 1
  // username: string = '';

  // onSubmit() {
  //   console.log(this.username); // Access the form data
  //   // ... further logic with the form data
  // }
}

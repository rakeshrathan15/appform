import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationServiceService } from '../application-service.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.css'
})
export class ApplicationFormComponent {

  states: string[] = ['Andhra Pradesh', 'Telangana', 'Maharashtra', 'Karnataka', 'Tamil Nadu'];
  user = {
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    gender: '',
    aadhaarNumber: '',
    panCard: '',
    address: '',
    state: '',
    city: '',
    pincode: '',
    terms: false,
  };

  constructor(private aplicationService : ApplicationServiceService){

  }

  onSubmit() {
    console.log('Form submitted:', this.user);
  }

}

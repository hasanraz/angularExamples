import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup = new FormGroup({});
  isNotValidFirstName = false;

  countries = [
    "Armenia",
    "Britain",
    "Germany",
    "Holland",
    "USA"
  ];

  emailRegex = "^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: new FormControl('', [Validators.required, Validators.minLength(8)]),
      middleName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.pattern(this.emailRegex)]),
      gender: new FormControl(''),
      phone: new FormControl('', [Validators.required]),
      country: new FormControl('')
    })
  }

  
  
  submitContact() {
    console.log('Submit the Form');
    if (!this.contactForm.controls.firstName.valid) {
      this.isNotValidFirstName = true
    }
    if (this.contactForm.valid) {
      console.log("Successful");
    } else {
      console.log("UnSuccessful");
    }
  }

  resetFirstName() {
    this.isNotValidFirstName = false;
  }

}

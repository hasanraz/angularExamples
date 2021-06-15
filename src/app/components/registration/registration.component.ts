import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public registrationForm: FormGroup;
  public ifErrorOccured: boolean = false;
  public errorMsg;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      phoneNumber: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      alert("Successfully Submitted");
    } else {
      if (!this.registrationForm.controls.firstName.valid) {
        this.errorMsg = "Not valid first name";
      }
      if (!this.registrationForm.controls.lastName.valid) {
        this.errorMsg = "Not valid last name";
      }
      if (!this.registrationForm.controls.email.valid) {
        this.errorMsg = "Not valid email";
      }
      if (!this.registrationForm.controls.phoneNumber.valid) {
        this.errorMsg = "Not valid phone number";
      }
      this.ifErrorOccured = true;
    }
  }

}

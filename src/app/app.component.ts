import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularFormLessonLive';
  accountType = ['Personal', 'Business'];
  signupForm: FormGroup;

  ngOnInit() {
    // Don not call the Validators. Only pass the reference
    this.signupForm = new FormGroup({
      'accountType': new FormControl('Personal', Validators.required),
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'streetAddress': new FormControl(null),
      'city': new FormControl(null),
      'country': new FormControl(null, Validators.required),
      'zipCode': new FormControl(null, [Validators.pattern("[0-9]*"), Validators.maxLength(6)]),
      'favoriteSauce': new FormControl(null)
    });

    // // Subscribe to value changes
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    // Subscribe to status changes
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );

    // Set form vales
    this.signupForm.setValue({
      'accountType': 'Personal',
      'name': 'Darin',
      'email': 'darin@example.com',
      'streetAddress': '1212 some street',
      'city': 'Modesto',
      'country': 'United States',
      'zipCode': '95358',
      'favoriteSauce': 'Who knows'
    });

    // Update/patch form values
    this.signupForm.patchValue({
      'email': 'darin@example-second.com'
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    console.log(this.signupForm.value);
  }

  onReset() {
    this.signupForm.reset();
  }
}

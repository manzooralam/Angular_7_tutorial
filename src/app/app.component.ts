import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

import {Validators} from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular7tutorial';
  emailid;
  
  validation_messages = {
    'emailid': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],

    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  formdata = new FormGroup({
    emailid: new FormControl('',
     Validators.compose([
       Validators.required,
       Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    // passwd: new FormControl("", 
    // this.passwordvalidation
    // )
   passwd : new FormControl('', 
    Validators.compose([
      Validators.minLength(5),
      Validators.required
    ])),
 });


 onClickSubmit(data) {this.emailid = data.emailid;}

}

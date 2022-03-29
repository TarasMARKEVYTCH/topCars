import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { User } from '../User';
import { CustomValidators } from '../categorie/helpers/customValidators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private form: FormBuilder, private http: HttpClient){ }
  // user!: User;
  
  
  ngOnInit(): void {

    this.signupForm = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      mail1: ['', [Validators.required, Validators.email ]],
      pass1: ['', [Validators.required, Validators.minLength(6)]],
      pass2: ['', Validators.required]
    },
    // CustomValidators.ConfirmedValidator('pass1', 'pass2')
    )
  }
  get f(){
    return this.signupForm.controls;
  }
  // getMail(){
  //   return this.signupForm.get("mail1");
  // }
  // getName(){
  //   return this.signupForm.get("name");
  // }
  // getPass(){
  //   return this.signupForm.get("pass1");
  // }
  // getPassConfirm(){
  //   return this.signupForm.get("pass2");
  // }
  create(){
    // this.http
    // console.log(this.signupForm.value);
   console.log(this.f);
   
  }

}

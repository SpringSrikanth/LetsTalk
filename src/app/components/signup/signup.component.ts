import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm:any;
  constructor(private formBuilder:FormBuilder,private router:Router,private service:AuthenticationService) { }

  ngOnInit(): void {
    this.onInitSignUpForm();
  }

  onInitSignUpForm(){
    this.signUpForm=this.formBuilder.group({
      firstName:[''],
      middleName:[''],
      secondName:[''],
      gender:[''],
      dob:[''],
      mobile:[''],
      email:[''],
      userName:[''],
      password:[''],
      bio:[''],
      hobbies:['']
    })
  }

  onSubmitSignUpForm(){
    // console.log(this.signUpForm.value);
    this.service.signUp(this.signUpForm.value.firstName,this.signUpForm.value.middleName,this.signUpForm.value.secondName,this.signUpForm.value.gender,this.signUpForm.value.dob,this.signUpForm.value.mobile,this.signUpForm.value.email,this.signUpForm.value.userName,this.signUpForm.value.password,this.signUpForm.value.bio,this.signUpForm.value.hobbies,[]);
  }
  
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  contactUsForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private service:AuthenticationService) {
    this.formInit();
  }
  
  ngOnInit(): void {
  }
  
  formInit(){
    const userData= this.service.userDetails ? JSON.parse(this.service.userDetails) :null
    this.contactUsForm=this.formBuilder.group({
      name:[userData?.user?.firstName,[Validators.required]],
      email:[userData?.user?.email,[Validators.required]],
      context:['',[Validators.required]],
      subject:['',[Validators.required]],
      message:['',[Validators.required]]
    })
    this.contactUsForm.get('name').disable({emitEvent:false})
    this.contactUsForm.get('email').disable({emitEvent:false})

  }
  
  public getName(){
    return this.contactUsForm.get('name');
  }
  public getEmail(){
    return this.contactUsForm.get('email');
  }
  public getContext(){
    return this.contactUsForm.get('context');
  }
  public getSubject(){
    return this.contactUsForm.get('subject');
  }
  public getMessage(){
    return this.contactUsForm.get('message');
  }

  public get firstName(){
    const auth = this.service.userDetails ? JSON.parse(this.service.userDetails) :null;
    return auth?.user?.firstName;
  }
  public get email(){
    const auth = this.service.userDetails ? JSON.parse(this.service.userDetails) :null;
    return auth?.user?.email;
  }

  onSubmitSignUpForm(){
    console.log(this.contactUsForm.value);
  }
}

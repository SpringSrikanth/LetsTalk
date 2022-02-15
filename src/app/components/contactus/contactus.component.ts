import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  contactUsForm:any;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.contactUsForm=this.formBuilder.group({
      name:["",[Validators.required]],
      email:['',[Validators.required]],
      context:['',[Validators.required]],
      subject:['',[Validators.required]],
      message:['',[Validators.required]]
    })
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
  onSubmitSignUpForm(){
    console.log(this.contactUsForm.value);
  }
}

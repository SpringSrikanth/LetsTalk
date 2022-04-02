import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersData:any
  displayedColumns=["firstName","secondName","mobile","gender","dob","email","hobbies","createdAt","email_Verified","activated"]

  constructor(private service:UsersService) { }

  ngOnInit(): void {
    this.loadUserDetails();
  }
  loadUserDetails(){
    this.service.getUsers().subscribe((res)=>{
      // console.log(res);
      this.usersData=res;
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersData:any
  displayedColumns=["firstName","secondName","mobile","gender","dob","email","hobbies","createdAt","email_Verified","activated"];
  pageIndex=0;
  pageSize=5;
  pageSizeOptions:number[]=[5,10,15,20,25,50];

  constructor(private service:UsersService) { }

  ngOnInit(): void {
    this.loadUserDetails(this.pageIndex,this.pageSize);
  }
  loadUserDetails(pageIndex,pageSize){
    this.service.getUsersByPagination(pageIndex,pageSize).subscribe((res)=>{
      // console.log(res);
      this.usersData=res;  
    })
  }
  handlePage(event){
    this.loadUserDetails(event.pageIndex,event.pageSize);
  }
}

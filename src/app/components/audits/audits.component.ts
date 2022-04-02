import { Component, OnInit } from '@angular/core';
import { AuditsService } from 'src/app/services/audits.service';

@Component({
  selector: 'app-audits',
  templateUrl: './audits.component.html',
  styleUrls: ['./audits.component.scss']
})
export class AuditsComponent implements OnInit {

  auditData:any;
  // displayedColumns=["email","client_ip","server_ip","client_city","server_city","client_region","server_region","uri","statusCode","client_org","server_org","client_timezone","server_timezone","createdAt"];
  displayedColumns=["email","client_ip","server_ip","client_region","uri","statusCode","client_org","server_org","client_timezone","server_timezone","createdAt"];

  constructor(private service:AuditsService) { }

  ngOnInit(): void {
   this.loadAudits();
  }
  loadAudits(){
    this.service.getAudits().subscribe((res)=>{
      console.log(res);
      this.auditData=res;
    })
  }
}

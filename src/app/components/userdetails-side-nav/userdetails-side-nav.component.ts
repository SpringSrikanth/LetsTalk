import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-userdetails-side-nav',
  templateUrl: './userdetails-side-nav.component.html',
  styleUrls: ['./userdetails-side-nav.component.scss']
})
export class UserdetailsSideNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('sidenav') sidenav: MatSidenav;

  close() {
    this.closeEvent.emit();
    this.sidenav.close();
  }
  
  @Output() closeEvent = new EventEmitter <string>()

}

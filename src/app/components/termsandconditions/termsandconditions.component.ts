import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-termsandconditions',
  templateUrl: './termsandconditions.component.html',
  styleUrls: ['./termsandconditions.component.scss']
})
export class TermsandconditionsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TermsandconditionsComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close();
  }
}

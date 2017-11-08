import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-hsk-dialog',
  templateUrl: './hsk-dialog.component.html',
  styleUrls: ['./hsk-dialog.component.css']
})
export class HskDialogComponent  {

  constructor(public dialogRef: MatDialogRef<HskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  onNoClick(): void {
    console.log("Clicked close");
    this.dialogRef.close();
  }

}

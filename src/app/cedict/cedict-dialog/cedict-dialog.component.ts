import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-cedict-dialog',
  templateUrl: './cedict-dialog.component.html',
  styleUrls: ['./cedict-dialog.component.css']
})
export class CedictDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CedictDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}

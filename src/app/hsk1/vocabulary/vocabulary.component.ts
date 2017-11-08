import { Component, OnInit ,Input,ViewChild ,Inject} from '@angular/core';

import {hsk} from '../../models/hsk';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import {MatPaginator,PageEvent} from '@angular/material';
import {hskService} from '../hskCommonServices/hsk1.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {HskDialogComponent} from '../hsk-dialog/hsk-dialog.component';

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}



@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.css']
})
export class VocabularyComponent implements OnInit {
  //hsk1:hsk[];
  hskLevel:string;

  buttonText:string;
  columns:number;
  hsk1: hsk[];
  length:number;
  pageIndex:number;
  pageSize:number;

  animal: string;
  name: string;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  //@Input() hsk1: hsk[];
  @Input() level:string;
  constructor(private route: ActivatedRoute,private hsk1Service:hskService,public dialog: MatDialog) {
   // this.setToZero();

   this.setColumns();
   //this.paginator.pageSize = 25;

  }



  openDialog(hskInput:hsk): void {
    let dialogRef = this.dialog.open(HskDialogComponent, {
      width: '250px',
      data: hskInput
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


  onResize(event) {
    const width = event.target.innerWidth;

    if (width > 950) {
      this.columns = 6;
    }
    if (width < 950) {
      this.columns = 4;
    }

    if (width < 750) {
      this.columns = 2;
    }

    if (width < 350) {
      this.columns = 1;
    }
  }

  setColumns(){

    var width = window.innerWidth ;

    if (width > 950) {
      this.columns = 6;
    }
    if (width < 950) {
      this.columns = 4;
    }



    if (width < 750) {
      this.columns = 2;
    }

    if (width < 350) {
      this.columns = 1;
    }

  }
  setToZero(){
    this.pageIndex = 0;
    this.pageSize=12;
    this.paginator.pageIndex = 0

  }
  setLength(level){
    switch(level){
      case "1":
        this.length = 150;
        break;
      case "2":
        this.length = 150;
        break;
      case "3":
        this.length = 300;
        break;
      case "4":
        this.length = 600;
        break;
      case "5":
        this.length = 1300;
        break;
      case "6":
        this.length = 2500;
        break;

    }

  }
  ngOnChanges(level){
    if(level){
      this.setToZero();
      this.setLength(this.level);

      this.loadData();

    }
  }

  loadData(){
    var pagesize = 12;
    if(this.paginator.pageSize){
      pagesize = this.paginator.pageSize;
    }


    this.hsk1Service.getPagedHsk(this.level,pagesize,this.paginator.pageIndex+1).subscribe(data => setTimeout(() =>{
      this.hsk1 = data;
      this.hsk1Service.setLoading(false);
     // this.dataSource = new hskDataSource(this.hsk1,this.paginator);
    },0));
  }
  handlePageEvent(event?:PageEvent){
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadData();

  }

  ngOnInit() {
    this.setLength(this.level);
    this.setToZero();
    this.loadData();
  }




}


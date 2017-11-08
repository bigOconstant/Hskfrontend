import { Component, OnInit ,Input,ViewChild } from '@angular/core';
import {MatTableModule} from '@angular/material';
import {hsk} from '../../models/hsk';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {MatPaginator,PageEvent} from '@angular/material';
import {hskService} from '../hskCommonServices/hsk1.service';
import {CsvService} from 'angular2-json2csv';


@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  //@Input() hsk1: hsk[];
  @Input() level:string;
  hsk1: hsk[];
  private hskinputval:hsk[];
  private hskinputvalStored:hsk[];
  pageEvent: PageEvent;
  pagelength:number;

  length:number;
  pageIndex:number;
  pageSize:number;

  constructor(private hsk1Service:hskService,private csvService: CsvService) {
    
    
       }

       downloadExcel(){
         this.hsk1Service.getHsks(this.level).subscribe(data => setTimeout(() =>{
          this.csvService.download(data, "HSK_level"+this.level);
          this.hsk1Service.setLoading(false);
          
        },0));
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

  loadData(){
    this.hsk1Service.getPagedHsk(this.level,this.paginator.pageSize,this.paginator.pageIndex+1).subscribe(data => setTimeout(() =>{
      this.hsk1 = data;
      this.hsk1Service.setLoading(false);
      this.dataSource = new hskDataSource(this.hsk1,this.paginator);
    },0));
  }

  ngOnChanges(level){
    if(level){
      this.setLength(this.level);
      this.setToZero();
      this.loadData();

    }
  }
  setToZero(){
    this.pageIndex = 0;
    this.pageSize=25;
    this.paginator.pageIndex = 0

  }

  

  dataSource:hskDataSource;
  displayedColumns = ['hanzi', 'pinyin', 'definition'];
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

export class hskDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  constructor(private _hskDatabase: hsk[],private _paginator: MatPaginator) {
    super();
  }
  connect(): Observable<hsk[]> {
    //const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return Observable.of( this._hskDatabase);
  }

  disconnect() {}
}

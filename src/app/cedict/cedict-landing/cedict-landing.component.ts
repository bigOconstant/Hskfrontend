import { Component, OnInit ,Input,ViewChild } from '@angular/core';
import {MatTableModule} from '@angular/material';
import {CEDICT} from '../../models/cedict';
import {CEDICTWITHSIZE} from '../../models/cedict';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {MatPaginator,PageEvent,MatToolbarModule,MatCardModule} from '@angular/material';
import {cedictService} from './cedictService';
import {CsvService} from 'angular2-json2csv';

@Component({
  selector: 'app-cedict-landing',
  templateUrl: './cedict-landing.component.html',
  styleUrls: ['./cedict-landing.component.css']
})
export class CedictLandingComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  cedictwithsize:CEDICTWITHSIZE;
  pageEvent: PageEvent;
  pagelength:number;

  length:number;
  pageIndex:number;
  pageSize:number;
  dataSource:cedictDataSource;
  displayedColumns = ['Traditional','Simplified', 'pinyin', 'definition'];
  constructor(public cedictService:cedictService) {
    
   }



  loadData(){
    this.cedictService.getPagedCedict(this.paginator.pageSize,this.paginator.pageIndex+1).subscribe(data => setTimeout(() =>{

      this.cedictwithsize = data;
      this.length = this.cedictwithsize.Size;
      this.cedictService.setLoading(false);
      this.dataSource = new cedictDataSource(this.cedictwithsize.Data,this.paginator);
    },0));
  }
  handlePageEvent(event?:PageEvent){
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadData();

  }


  ngOnInit() {
    this.pageSize = 10;
    this.pageIndex = 0;
    this.length = 100;
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = 10;
    this.loadData();
  }

}
export class cedictDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  constructor(private _cedictDatabase: CEDICT[],private _paginator: MatPaginator) {
    super();
  }
  connect(): Observable<CEDICT[]> {
    //const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return Observable.of( this._cedictDatabase);
  }

  disconnect() {}
}

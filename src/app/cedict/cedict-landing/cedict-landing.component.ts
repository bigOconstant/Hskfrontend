import { Component, OnInit ,Input,ViewChild, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material';
import {CEDICT} from '../../models/cedict';
import {CEDICTWITHSIZE,Search} from '../../models/cedict';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {MatPaginator,PageEvent,MatToolbarModule,MatCardModule} from '@angular/material';
import {cedictService} from './cedictService';
import {CedictDialogComponent} from '../cedict-dialog/cedict-dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
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
  searchString:string;
  searchStringCopy:string;
  searchObject:Search;
  searching:boolean;
  clickedSearch:boolean;
  searchResultsShown:boolean;
  simplifiedShown:boolean;
  select:any[];
  selected:any;
  result:string;
  width:number;
  length:number;
  pageIndex:number;
  pageSize:number;
  dataSource:cedictDataSource;
  displayedColumns = ['hanzi', 'pinyin', 'definition'];
  constructor(public cedictService:cedictService,public dialog: MatDialog) {
    this.searchString = "";
    this.searchObject = new Search();
    this.searching = false;
    this.clickedSearch = false;
    this.searchResultsShown = false;
    this.searchStringCopy = "";
    this.simplifiedShown = true;
    this.select = [{value:'Simplified',viewValue:"Simplified"},{value:"Traditional",viewValue:"Traditional"}];
    this.selected = this.select[0].value;
    this.width = window.innerWidth;
   }
   onResize(event) {
    this.width = event.target.innerWidth;
   }

   openDialog(): void {
    let dialogRef = this.dialog.open(CedictDialogComponent, {
      width: '260px'
      
    });

    dialogRef.afterClosed().subscribe(result => {
      this.result = result;
    });
  }

   cancelSearch(){
     this.clickedSearch = !this.clickedSearch;
   }

   clearSearch(){
    this.pageIndex = 0;
    this.searchResultsShown = false;
    this.searchString =  "";
    this.searchStringCopy = "";
    this.searching = false;
    this.searchObject.Page = 0;
    this.clickedSearch = false;
    this.loadData();
   }


   callSearchCedict(){
     this.searchResultsShown = true;
    this.clickedSearch = false;
    this.pageIndex = 0;
    this.searching = true;
    this.searchObject.Page = 0;
    this.SearchCedict();

   }

   switchCharacterSet(){
    this.simplifiedShown = !this.simplifiedShown;
    if(this.searching){
    this.SearchCedict();
    }else{
      this.loadData();
    }

   }

   SearchCedict(){
     
     this.searchObject = new Search();
     this.searchObject.Page = this.pageIndex;
     this.searchObject.PageSize = this.pageSize;
     this.searchObject.Search = this.searchString.toLowerCase();
     this.cedictService.getPagedSearchCedict(this.searchObject).subscribe(data => setTimeout(() =>{
      this.cedictwithsize = data;
      this.length = this.cedictwithsize.Size;
      this.cedictService.setLoading(false);
      this.searchStringCopy = this.searchString;
      this.dataSource = new cedictDataSource(this.cedictwithsize.Data,this.paginator);
     },0));
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

    if(!this.searching){
    this.loadData();
    }else{
      this.searchObject.Page = event.pageIndex;
      this.SearchCedict();
    }

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

import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {appService} from './app.service';
import {hsk} from './models/hsk';
import {MatToolbarModule} from '@angular/material';
import {MatButtonModule,MatMenuModule, MatCheckboxModule} from '@angular/material';
import {Router, NavigationEnd} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'HSK Class';
  leveltitle = "hsk1";
  constructor(private http: HttpClient,public apps:appService){
    this.value = "1";
    this.loading = true;
  }
  hsk1:hsk[];
  value:string;
  loading:boolean;




  levels:Array<any> = [
    {num: "1", name: "HSK1"},
    {num: "2", name: "HSK2"},
    {num: "3", name: "HSK3"},
    {num: "4", name: "HSK4"},
    {num: "5", name: "HSK5"},
    {num: "6", name: "HSK6"}
];
// setNewlevel(val){
//   for(var i = 0; i <this.levels.length;++i){
//     if (this.levels[i].name == val){
//     this.value = this.levels[i].num;
//     this.leveltitle = this.levels[i].name;
//     break;
//     }
//   }
  
//   this.updateList();
// }

// updateList(){
//   console.log("Calling this get hsks!")
//   this.apps.getHsks(this.value).subscribe(data=>{
//     this.hsk1 = data;
//   })
// }


  ngOnInit(): void {
    
    var level = "1";

  }

  }






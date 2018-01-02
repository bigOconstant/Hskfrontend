import { Component, OnInit ,} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import {MatMenuModule} from ''
import {MatButtonModule,MatMenuModule, MatCheckboxModule} from '@angular/material';
import {HomeLink} from '../models/linkModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  columns:number;
  homeLinks:HomeLink[];
  constructor(private route: ActivatedRoute, private router: Router)
  {
    this.setColumns()
    this.initHomeLinks();
   }

  ngOnInit() {
  }
  setColumns(){
    var width = window.innerWidth;
    if (width > 1057) {
      this.columns = 2;
    }
    else if (width < 1057 && width> 709) {
      this.columns = 2;
    }
    else if (width <709 ){
      this.columns = 1;
    }

  }


  onResize(event) {
    var width = event.target.innerWidth;


    if (width > 1057) {
      this.columns = 2;
    }
    else if (width < 1057 && width> 709) {
      this.columns = 2;
    }
    else if (width <709 ){
      this.columns = 1;
    }



  }
  navigate(link:HomeLink){
    this.router.navigateByUrl(link.url+link.params);

  }

  initHomeLinks(){
    this.homeLinks = [];
    this.homeLinks.push(new HomeLink("HSK","hskHome","Study For the HSK",""));
    this.homeLinks.push(new HomeLink("Chinese English Dictionary","/cedict","Browse Most Chinese Words and Phrases",""));

  }

}

// export class HomeLink{
//   title:string;
//   url:string;
//   description:string;
//   params:string;

//   constructor(title:string,url:string,description:string,params:string){
//     this.title = title;
//     this.url = url;
//     this.description = description;
//     this.params = params;
//   }
// }

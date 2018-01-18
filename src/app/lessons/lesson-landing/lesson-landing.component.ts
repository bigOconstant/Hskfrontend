import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
//import {MatMenuModule} from ''
import {MatButtonModule,MatMenuModule, MatCheckboxModule} from '@angular/material';
import {HomeLink} from '../../models/linkModel';

@Component({
  selector: 'app-lesson-landing',
  templateUrl: './lesson-landing.component.html',
  styleUrls: ['./lesson-landing.component.css']
})
export class LessonLandingComponent implements OnInit {

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
      this.columns = 3;
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
      this.columns = 3;
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
   
    this.homeLinks.push(new HomeLink("Lesson1","/lesson1","What is Chinese, how do you write it?",""));
    this.homeLinks.push(new HomeLink("Lesson2","/lesson2","Your First Conversation",""));

  }



}

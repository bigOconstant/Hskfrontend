import { Component, OnInit ,} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import {MatMenuModule} from ''
import {MatButtonModule,MatMenuModule, MatCheckboxModule} from '@angular/material';


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
  console.log("Resizing width:"+width);


    //this.setColumns();

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
    this.homeLinks.push(new HomeLink("HSK1","/hsk1?level=","Beginner Mandarin. 150 words","1"));
    this.homeLinks.push(new HomeLink("HSK2","/hsk1?level=","Beginner Mandarin. 150 words","2"));
    this.homeLinks.push(new HomeLink("HSK3","/hsk1?level=","Intermediate Mandarin. 300 words","3"));
    this.homeLinks.push(new HomeLink("HSK4","/hsk1?level=","Intermediate Mandarin. 600 words","4"));
    this.homeLinks.push(new HomeLink("HSK5","/hsk1?level=","Advanced Mandarin. 1300 words","5"));
    this.homeLinks.push(new HomeLink("HSK6","/hsk1?level=","Advanced Mandarin. 2500 words","6"));
    this.homeLinks.push(new HomeLink("Chinese English Dictionary","/cedict","Browse Most Chinese Words and Phrases",""));

  }

}

export class HomeLink{
  title:string;
  url:string;
  description:string;
  params:string;

  constructor(title:string,url:string,description:string,params:string){
    this.title = title;
    this.url = url;
    this.description = description;
    this.params = params;
  }
}

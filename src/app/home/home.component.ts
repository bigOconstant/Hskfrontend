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
    //console.log("Setting initial inside")
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

    console.log("Width changed to "+width);

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
    console.log('/hsk1?level='+link.params);
    this.router.navigateByUrl('/hsk1?level='+link.params);
    //this.router.navigate(['/']);
  }

  initHomeLinks(){
    this.homeLinks = [];
    this.homeLinks.push(new HomeLink("HSK1","","Beginner Mandarin. 150 words","1"));
    this.homeLinks.push(new HomeLink("HSK2","","Beginner Mandarin. 150 words","2"));
    this.homeLinks.push(new HomeLink("HSK3","","Intermediate Mandarin. 300 words","3"));
    this.homeLinks.push(new HomeLink("HSK4","","Intermediate Mandarin. 600 words","4"));
    this.homeLinks.push(new HomeLink("HSK5","","Advanced Mandarin. 1300 words","5"));
    this.homeLinks.push(new HomeLink("HSK6","","Advanced Mandarin. 2500 words","6"));

  }

}


export class HomeLink{
  title:string;
  picture:string;
  description:string;
  params:string;

  constructor(title:string,picture:string,description:string,params:string){
    this.title = title;
    this.picture = picture;
    this.description = description;
    this.params = params;
  }
}

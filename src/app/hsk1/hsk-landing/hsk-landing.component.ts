import { Component, OnInit } from '@angular/core';
import {hskService} from '../hskCommonServices/hsk1.service';
import {hsk} from '../../models/hsk';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import {appService} from '../../app.service';
import {  ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-hsk-landing',
  templateUrl: './hsk-landing.component.html',
  styleUrls: ['./hsk-landing.component.css']
})
export class HskLandingComponent implements OnInit {

  hskLevel:string;
  level:string;
  buttonText:string;
  constructor(private hsk1Service:hskService,private route: ActivatedRoute,private apps:appService,private _cdr: ChangeDetectorRef) {

   }

  ngOnInit() {

    this.hskLevel = "HSK 1";
    this.route.queryParams
    .filter(params => params.level)
    .subscribe(params => {
      this.level = params.level;
      this.hskLevel = "HSK "+this.level;

    });


  }

}

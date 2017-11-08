import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {hsk} from '../../models/hsk';
import {appService} from '../../app.service'
@Injectable()
export class hsk2Service{
    constructor(private http: HttpClient,private appS: appService){
    }
    
     getHsks(){
        return this.appS.getHsks("2");
    }


}
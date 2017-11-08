import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {hsk} from '../../models/hsk';
import {appService} from '../../app.service';


@Injectable()

export class hskService{
    constructor(private http: HttpClient,private appS: appService){
    }

     getHsks(level:string){
        return this.appS.getHsks(level);
    }
    setLoading(val:boolean){
        this.appS.setLoading(val);
        
    }
    getPagedHsk(level:string,pageSize:number,page:number){
        return this.appS.getPagedHsk(level,pageSize,page);
   }


}
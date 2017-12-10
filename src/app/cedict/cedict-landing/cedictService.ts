import {appService} from '../../app.service';
import {CEDICTWITHSIZE,Search} from '../../models/cedict';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class cedictService{
    constructor(private http: HttpClient,private appS: appService){
    }

    getPagedCedict(pageSize:number,page:number){
        return this.appS.getPagedCedict(pageSize,page);
   }

   getPagedSearchCedict(search:Search){
   
   return this.appS.getPagedSearchCedict(search);
}
   setLoading(val:boolean){
    this.appS.setLoading(val);
    
}


}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {hsk,hskWITHSIZE} from '../../models/hsk';
import {appService} from '../../app.service';
import {ServiceUrl}from '../../models/ServiceUrl'


@Injectable()

export class hskService{
    serviceUrl:ServiceUrl;
    constructor(private http: HttpClient,private appS: appService){
        this.serviceUrl = new ServiceUrl();
    }

    //  getHsks(level:string){
    //     return this.appS.getHsks(level);
    // }
    setLoading(val:boolean){
        this.appS.setLoading(val);
        
    }

   getPagedHsk(level:string,pageSize:number,page:number){
    this.setLoading(true);
   return this.http.get<hskWITHSIZE>(this.serviceUrl.url+'/pagedHsk?hskLevel='+level+"&page="+page+"&pageSize="+pageSize);
}


}
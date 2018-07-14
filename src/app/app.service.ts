import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import {hsk} from './models/hsk';
import {CEDICTWITHSIZE,Search} from './models/cedict'
import {ServiceUrl} from './models/ServiceUrl'

@Injectable()
export class appService{
    public loading: boolean;
    serviceUrl:ServiceUrl;
    constructor(private http: HttpClient){
        this.loading = false;
        this.serviceUrl = new ServiceUrl();

    }
    setLoading(val:boolean){
       // Set asynchronously to avoid the dreded ExpressionChangedAfterItHasBeenCheckedError Error
        setTimeout(() => {
            this.loading = val;
        });
        
    }
     getLoading(){
        return this.loading;
    }

    //  getHsks(level:string){
    //      this.setLoading(true);
    //     return this.http.get<hsk[]>(this.serviceUrl.url+'/getAllHsk?hskLevel='+level);
    // }

    // getPagedHsk(level:string,pageSize:number,page:number){
    //     this.setLoading(true);
    //     console.log("Values are as follows! level:"+level+" ,pageSize:"+pageSize+" , page:"+page);
    //    return this.http.get<hsk[]>(this.serviceUrl.url+'/pagedHsk?hskLevel='+level+"&page="+page+"&pageSize="+pageSize);
    // }
    
    getPagedCedict(pageSize:number,page:number){
        this.setLoading(true);
       return this.http.get<CEDICTWITHSIZE>(this.serviceUrl.url+'/pagedcedict?page='+page+"&pageSize="+pageSize);
    }

    getPagedSearchCedict(search:Search){
        this.setLoading(true);
        let headers = new Headers({ 'Content-Type': 'application/json' });
       
       return this.http.post<CEDICTWITHSIZE>(this.serviceUrl.url+'/pagedcedictDefinitionSearch',JSON.stringify(search));
    }


}
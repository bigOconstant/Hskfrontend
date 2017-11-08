import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {hsk} from './models/hsk';

@Injectable()
export class appService{
    public loading: boolean;
    constructor(private http: HttpClient){
        this.loading = false;

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

     getHsks(level:string){
         this.setLoading(true);
        return this.http.get<hsk[]>('http://localhost:8000/getAllHsk?hskLevel='+level);
    }

    getPagedHsk(level:string,pageSize:number,page:number){
        this.setLoading(true);
       return this.http.get<hsk[]>('http://localhost:8000/pagedHsk?hskLevel='+level+"&page="+page+"&pageSize="+pageSize);
   }


}
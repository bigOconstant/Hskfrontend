import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {appService} from '../app.service';
import {ServiceUrl}from '../models/ServiceUrl';
import {Convo,Word,Lesson} from '../models/lesson';


@Injectable()
export class LessonsServiceService {

  serviceUrl:ServiceUrl;
  constructor(private http: HttpClient,private appS: appService){
      this.serviceUrl = new ServiceUrl();
  }
  setLoading(val:boolean){
    this.appS.setLoading(val);
    
}
//   getLesson(lesson:number){
//     this.setLoading(true);
//    return this.http.get<hsk[]>(this.serviceUrl.url+'/pagedHsk?hskLevel='+level+"&page="+page+"&pageSize="+pageSize);
// }

getLesson(lesson:number){
  this.setLoading(true);
 return this.http.get<Lesson>(this.serviceUrl.url+'/Lesson?lesson='+lesson);
}

}

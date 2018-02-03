import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {LessonsServiceService} from '../lessons-service.service';
import {Convo,Word,Lesson} from '../../models/lesson';
import {DataSource} from '@angular/cdk/collections';
import {MatTableModule} from '@angular/material';
import {MatPaginator,PageEvent} from '@angular/material';

import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css']
})
export class Lesson2Component implements OnInit {

  LessonTwo:Lesson;
  dataSource:lessonDataSource;
  displayedColumns = ['hanzi', 'pinyin', 'definition'];
  englishShown:boolean;

  constructor(private lessonService:LessonsServiceService) {
      this.englishShown = false;
      this.LessonTwo = new Lesson();

      
    
   }
   dosplayValue(sentence:Convo){
     if(this.englishShown){
       return sentence.English;
      }
     else if(sentence.Flag){
       return sentence.Hanzi
     }else{
       return sentence.Pinyin;
     }
   }
   buttonText(){
     if(this.englishShown){
       return "Show Chinese";
     }else{
       return "Show English";
     }
   }
   
 

  ngOnInit() {
    this.lessonService.getLesson(2).subscribe(data => setTimeout(() =>{
      this.LessonTwo = data;
      console.log("This lesson is below");
      console.log(this.LessonTwo);
      this.lessonService.setLoading(false);
      this.dataSource = new lessonDataSource(this.LessonTwo.Words);
      window.scrollTo(0, 0);
    },0));
  }



}
export class lessonDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  constructor(private _hskDatabase: Word[]) {
    super();
  }
  connect(): Observable<Word[]> {
    //const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return Observable.of( this._hskDatabase);
  }

  disconnect() {}
}




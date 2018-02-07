import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {LessonsServiceService} from '../lessons-service.service';
import {Convo,Word,Lesson} from '../../models/lesson';
import {DataSource} from '@angular/cdk/collections';
import {MatTableModule} from '@angular/material';
import {MatPaginator,PageEvent,MatTooltipModule} from '@angular/material';
import {MatGridListModule,} from '@angular/material/grid-list';

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
  audio: any;

  @ViewChild('hao') audioPlayerRef: ElementRef;

  constructor(private lessonService:LessonsServiceService) {
      this.englishShown = false;
      this.LessonTwo = new Lesson();
      this.audio = new Audio();
      this.audio.src = 'assets/sounds/wo.m4a';
    
   }
   tiles = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
   
  ];
   onAudioPlay(file){
     this.audio = new Audio();
     this.audio.src = file;
     this.audio.play();

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




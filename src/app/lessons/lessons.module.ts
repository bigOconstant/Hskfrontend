import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lesson1Component } from './lesson1/lesson1.component';
import {lessonsrouting} from './lessons.routing';
import { LessonLandingComponent } from './lesson-landing/lesson-landing.component';
import {MatGridListModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatCardModule,
  MatButtonModule,
  MatPaginatorModule,
  MatTabsModule,
  MatToolbarModule,
  MatDividerModule,
  MatListModule
,MatIconModule} from '@angular/material';
import {LessonsServiceService} from './lessons-service.service';


import { Lesson2Component } from './lesson2/lesson2.component';

@NgModule({
  imports: [
    CommonModule,
    lessonsrouting,
    MatGridListModule,


    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule

  ],
  declarations: [Lesson1Component, LessonLandingComponent, Lesson2Component],
  providers: [LessonsServiceService],
})
export class LessonsModule { }

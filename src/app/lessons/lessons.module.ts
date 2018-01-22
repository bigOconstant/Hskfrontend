import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lesson1Component } from './lesson1/lesson1.component';
import {lessonsrouting} from './lessons.routing';
import { LessonLandingComponent } from './lesson-landing/lesson-landing.component';
import {MatGridListModule,
  MatProgressSpinnerModule,
  MatTableModule,MatCardModule,
  MatButtonModule,MatPaginatorModule,
  MatTabsModule,MatToolbarModule} from '@angular/material';
  

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
  
    MatToolbarModule

  ],
  declarations: [Lesson1Component, LessonLandingComponent, Lesson2Component]
})
export class LessonsModule { }

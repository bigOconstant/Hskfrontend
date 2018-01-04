import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lesson1Component } from './lesson1/lesson1.component';
import {lessonsrouting} from './lessons.routing';

@NgModule({
  imports: [
    CommonModule,
    lessonsrouting
  ],
  declarations: [Lesson1Component]
})
export class LessonsModule { }

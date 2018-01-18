import { Routes, RouterModule } from '@angular/router';

import { Lesson1Component } from './lesson1/lesson1.component';
import {Lesson2Component}from './lesson2/lesson2.component';

import {LessonLandingComponent} from './lesson-landing/lesson-landing.component'

const lessonRoutes: Routes = [
    { path: 'lesson1',
      children: [
        { path: '', component: Lesson1Component }
   
      ]
    },
    { path: 'lesson2',
      children: [
        { path: '', component: Lesson2Component }
   
      ]
    },
    {
      path:'lessonlanding',
      children:[
      { path:'',component:LessonLandingComponent}
      ]
    }
  ];
  
  export const lessonsrouting = RouterModule.forChild(lessonRoutes);
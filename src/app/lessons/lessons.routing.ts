import { Routes, RouterModule } from '@angular/router';

import { Lesson1Component } from './lesson1/lesson1.component';

const lessonRoutes: Routes = [
    { path: 'lesson1',
      children: [
        { path: '', component: Lesson1Component }
   
      ]
    }
  ];
  
  export const lessonsrouting = RouterModule.forChild(lessonRoutes);
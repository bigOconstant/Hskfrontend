import { Routes, RouterModule } from '@angular/router';

import { CedictLandingComponent } from './cedict-landing/cedict-landing.component';

const cedictRoutes: Routes = [
    { path: 'cedict',
      children: [
        { path: '', component: CedictLandingComponent }
   
      ]
    }
  ];
  
  export const cedictrouting = RouterModule.forChild(cedictRoutes);
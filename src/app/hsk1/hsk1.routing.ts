import { Routes, RouterModule } from '@angular/router';
import {VocabularyComponent} from  './vocabulary/vocabulary.component';
import { HskLandingComponent } from './hsk-landing/hsk-landing.component';
import {HskHomeComponent} from './hsk-home/hsk-home.component'
const Hsk1Routes: Routes = [
    { path: 'hsk1',
      children: [
        { path: '', component: HskLandingComponent },
         { path: ':level', component: HskLandingComponent},
        
        //   canActivate: [AuthCanActivate],
        //   canDeactivate: [UserCanDeactivate],
        //   data: { key: 1 } // it has to be an object
        // }
      ]
      
      
    },
    {path:'hskHome',component:HskHomeComponent}
  ];
  
  export const Hsk1Routing = RouterModule.forChild(Hsk1Routes);
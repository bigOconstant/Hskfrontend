import { Routes, RouterModule } from '@angular/router';
import {Hsk2VocabularyComponent} from  './hsk2-vocabulary/hsk2-vocabulary.component';

const Hsk2Routes: Routes = [
    { path: 'hsk2',
      children: [
        { path: '', component: Hsk2VocabularyComponent },
        // { path: ':id', component: User,
        //   canActivate: [AuthCanActivate],
        //   canDeactivate: [UserCanDeactivate],
        //   data: { key: 1 } // it has to be an object
        // }
      ]
    }
  ];
  
  export const Hsk2Routing = RouterModule.forChild(Hsk2Routes);
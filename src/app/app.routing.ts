import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {TestComponentComponent} from './test-component/test-component.component'


const appRoutes: Routes = [
    { path: 'tests', component: TestComponentComponent },
    { path: '', component: HomeComponent }
    
    
  ];

  export const AppRouting = RouterModule.forRoot(appRoutes, { 
    useHash: true,
    preloadingStrategy: PreloadAllModules
  });
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from './home/about/about.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {path:'about',component:AboutComponent}
  ];

  export const AppRouting = RouterModule.forRoot(appRoutes, { 
    useHash: true,
    preloadingStrategy: PreloadAllModules
  });
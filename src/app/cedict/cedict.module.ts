import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {cedictService} from './cedict-landing/cedictService'
import { CedictLandingComponent } from './cedict-landing/cedict-landing.component';
import {cedictrouting} from './cedict.routing';

import {MatGridListModule,
  MatProgressSpinnerModule,
  MatTableModule,MatCardModule,
  MatButtonModule,MatPaginatorModule,
  MatTabsModule,MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    cedictrouting,
    MatPaginatorModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule
    
  ],
  declarations: [CedictLandingComponent],
  providers: [cedictService],
})
export class CedictModule { }

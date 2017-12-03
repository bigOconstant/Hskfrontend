import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CedictLandingComponent } from './cedict-landing/cedict-landing.component';
import {cedictrouting} from './cedict.routing'
import {MatGridListModule,
  MatProgressSpinnerModule,
  MatTableModule,MatCardModule,
  MatButtonModule,MatPaginatorModule,
  MatTabsModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    cedictrouting
  ],
  declarations: [CedictLandingComponent]
})
export class CedictModule { }

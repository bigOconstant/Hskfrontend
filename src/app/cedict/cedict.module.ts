import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {cedictService} from './cedict-landing/cedictService'
import { CedictLandingComponent } from './cedict-landing/cedict-landing.component';
import {cedictrouting} from './cedict.routing';
import { FormsModule } from '@angular/forms';

import {MatGridListModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,MatPaginatorModule,
  MatTabsModule,MatToolbarModule,MatInputModule} from '@angular/material';

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
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatIconModule
    
  ],
  declarations: [CedictLandingComponent],
  providers: [cedictService],
})
export class CedictModule { }

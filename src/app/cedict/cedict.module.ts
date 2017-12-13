import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {cedictService} from './cedict-landing/cedictService'
import { CedictLandingComponent } from './cedict-landing/cedict-landing.component';
import {cedictrouting} from './cedict.routing';
import { FormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';

import {MatGridListModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatSelectModule,
  MatPaginatorModule,
  MatTabsModule,MatToolbarModule,MatInputModule} from '@angular/material';
  import {MatDialogModule} from '@angular/material/dialog';
import { CedictDialogComponent } from './cedict-dialog/cedict-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
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
    MatIconModule,
    MatDialogModule,
    MatTooltipModule
    
    
  ],
  declarations: [CedictLandingComponent, CedictDialogComponent],
  providers: [cedictService],
  entryComponents: [
    CedictDialogComponent,
  ],
})
export class CedictModule { }

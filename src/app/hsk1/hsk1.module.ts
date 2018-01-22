import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import {Hsk1Routing} from './hsk1.routing'
import { HttpModule }  from '@angular/http';
import {hskService} from './hskCommonServices/hsk1.service'
import {MatGridListModule,
        MatProgressSpinnerModule,
        MatTableModule,MatCardModule,
        MatButtonModule,MatPaginatorModule,
        MatTabsModule,MatToolbarModule} from '@angular/material';
import { WordListComponent } from './word-list/word-list.component';
import { HskLandingComponent } from './hsk-landing/hsk-landing.component';
import {ChangeDetectorRef } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { HskDialogComponent } from './hsk-dialog/hsk-dialog.component';
import { HskHomeComponent } from './hsk-home/hsk-home.component';
@NgModule({
  imports: [
    CommonModule,
    Hsk1Routing,
    HttpModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatToolbarModule
  ],

  declarations: [VocabularyComponent, WordListComponent, HskLandingComponent, HskDialogComponent, HskHomeComponent],
  providers: [hskService],
  entryComponents: [
    HskDialogComponent,
  ],
})
export class Hsk1Module { }

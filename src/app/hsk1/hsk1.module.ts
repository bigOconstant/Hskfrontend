import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import {Hsk1Routing} from './hsk1.routing'
import { HttpModule }  from '@angular/http';
import {hskService} from './hskCommonServices/hsk1.service'
import {MatGridListModule,MatProgressSpinnerModule,MatTableModule} from '@angular/material';
import {MatCardModule,MatButtonModule} from '@angular/material';
import { WordListComponent } from './word-list/word-list.component';
import {MatTabsModule} from '@angular/material';
import { HskLandingComponent } from './hsk-landing/hsk-landing.component';
import {MatPaginatorModule} from '@angular/material';
import {ChangeDetectorRef } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { HskDialogComponent } from './hsk-dialog/hsk-dialog.component';
import {CsvService} from 'angular2-json2csv';
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
    MatDialogModule


  ],
  declarations: [VocabularyComponent, WordListComponent, HskLandingComponent, HskDialogComponent],
  providers: [hskService,CsvService],
  entryComponents: [
    HskDialogComponent,
  ],
})
export class Hsk1Module { }

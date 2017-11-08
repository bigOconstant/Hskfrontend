import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hsk2VocabularyComponent } from './hsk2-vocabulary/hsk2-vocabulary.component';
import {Hsk2Routing} from './hsk2.routing';
import {hsk2Service} from './hsk2CommonServices/hsk2.service';
import { HttpModule }  from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    Hsk2Routing,
    HttpModule
  ],
  declarations: [Hsk2VocabularyComponent],
  providers:[hsk2Service]
})
export class Hsk2Module { }

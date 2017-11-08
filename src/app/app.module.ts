import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {appService} from './app.service';
import { RouterModule, Routes } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';
import { TestComponent2Component } from './test-component2/test-component2.component';
import {Hsk1Module} from './hsk1/hsk1.module';
import {Hsk2Module} from './hsk2/hsk2.module';
import { HskLevelOneComponent } from './hsk-level-one/hsk-level-one.component';
import { HomeComponent } from './home/home.component';
import {AppRouting} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material';
import {MatToolbarModule,MatButtonModule,MatMenuModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material';
import {Loading} from './SharedServices/loading.service';
import {MatProgressBarModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TestComponent2Component,
    HskLevelOneComponent,
    HomeComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouting,
    Hsk1Module,
    Hsk2Module,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatIconModule
    

    
  ],
  providers: [appService],
  bootstrap: [AppComponent]
})
export class AppModule { }

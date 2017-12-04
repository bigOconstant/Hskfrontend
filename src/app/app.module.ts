import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {appService} from './app.service';
import { RouterModule, Routes } from '@angular/router';
import {Hsk1Module} from './hsk1/hsk1.module';
import {CedictModule} from './cedict/cedict.module'
import { HomeComponent } from './home/home.component';
import {AppRouting} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule,
          MatCardModule,
          MatGridListModule,
          MatProgressBarModule,
          MatProgressSpinnerModule,
          MatToolbarModule,
          MatButtonModule,
          MatMenuModule,
          MatCheckboxModule
} from '@angular/material';
import { AboutComponent } from './home/about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouting,
    Hsk1Module,
    CedictModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule



  ],
  providers: [appService],
  bootstrap: [AppComponent]
})
export class AppModule { }

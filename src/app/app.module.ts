import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';

import { ChuckNorrisJokesApiService } from './services';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [
    ChuckNorrisJokesApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

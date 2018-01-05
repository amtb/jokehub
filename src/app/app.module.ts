import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { MatCardModule, MatIconModule, MatTabsModule, MatToolbarModule} from '@angular/material';

import { AppComponent } from './app.component';

import { ChuckNorrisJokesApiService } from './services';
import { NavbarComponent, JokeComponent } from './components';
import { HomePageComponent } from './pages';



@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    NavbarComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule
  ],
  providers: [
    ChuckNorrisJokesApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

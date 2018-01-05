import { Component } from '@angular/core';

import { HomePageComponent } from './pages';
import { NavbarComponent } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor () {

  }
}

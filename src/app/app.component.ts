import { Component, OnInit} from '@angular/core';

import { ChuckNorrisJokesApiService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  data: any;

  constructor (private joke: ChuckNorrisJokesApiService) {

  }

  ngOnInit() {
    this.joke.getRandomJoke().subscribe(e => {
      this.data = e;
      console.log(e);
     });
  }
}

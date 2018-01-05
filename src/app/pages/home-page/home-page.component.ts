import { Component, OnInit } from '@angular/core';
import { MatIconModule, MatTabsModule } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { Joke } from '../../models';
import { JokeComponent } from '../../components';
import { ChuckNorrisJokesApiService } from '../../services';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  jokes$: Observable<Joke[]>;

  constructor(private api: ChuckNorrisJokesApiService) { }

  ngOnInit() {
    this.jokes$ = this.api.getRandomJokes();
  }

}

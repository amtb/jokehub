import { Component, Input } from '@angular/core';
import { MatCardModule, MatIconModule } from '@angular/material';

import { Joke } from '../../models';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {

  @Input() joke: Joke;

  constructor() { }

}

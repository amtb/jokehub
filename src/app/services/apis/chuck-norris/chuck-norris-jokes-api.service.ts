import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class ChuckNorrisJokesApiService {

  private baseURL = 'http://api.icndb.com/jokes';

  constructor() { }

  public getRandomJoke(): Observable<any> {
    return Observable.fromPromise(
      fetch(`${this.baseURL}/random`)
    );
  }

}

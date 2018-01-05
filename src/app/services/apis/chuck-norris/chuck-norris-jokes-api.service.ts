import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { map } from 'rxjs/operators';

import { decode } from 'ent';

import { BaseApi } from '../base-api';

import { Joke } from '../../../models';


const chuckNorrisApiMapper = map((data: any) => {
  return data.value.map(e => {
    return {
      text: decode(e.joke)
    } as Joke;
  });
});

const dadJokeApiMapper = map((data: any) => {
  return data.results.map(e => {
    return {
      text: e.joke
    } as Joke;
  });
});

const dkatzApiMapper = map((data: any) => {
  return data.map(e => {
    return {
      text: `${e.setup}${e.punchline}`
    } as Joke;
  });
});

const jsonMapper = map((response: Response) => response.json());

@Injectable()
export class ChuckNorrisJokesApiService extends BaseApi {

  constructor(private http: Http) {
    super('http://api.icndb.com/jokes');
  }

  public getRandomJokes(): Observable<Joke[]> {
    return Observable.forkJoin([
      this.getChuckNorrisJoke(),
      this.getDadJokes(),
      this.get15DkatzJokes()
    ])
    .pipe(
      map(values => [...values[0], ...values[1], ...values[2]])
    );
  }

  private getChuckNorrisJoke(): Observable<Joke[]> {
    return this.http.get(`${this.baseURL}/random/10?exclude=[explicit]`)
      .pipe(jsonMapper, chuckNorrisApiMapper);
  }

  private getDadJokes(): Observable<Joke[]> {
    const MAX_PAGES = 39, MIN_PAGES = 1;
    const page = Math.floor(Math.random() * (MAX_PAGES - MIN_PAGES)) + MIN_PAGES;
    return this.http.get(`https://icanhazdadjoke.com/search?limit=10&page=${page}`, {
      headers: new Headers({
        'Accept': 'application/json',
        'User-Agent': 'https://github.com/amtb/jokehub'
      })
    })
    .pipe(jsonMapper, dadJokeApiMapper);
  }

  private get15DkatzJokes(): Observable<Joke[]> {
    return this.http.get(`https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten`)
      .pipe(jsonMapper, dkatzApiMapper);
  }

}

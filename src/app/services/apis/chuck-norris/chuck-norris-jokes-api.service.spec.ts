import { TestBed, inject } from '@angular/core/testing';

import { ChuckNorrisJokesApiService } from './chuck-norris-jokes-api.service';

describe('ChuckNorrisJokesApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChuckNorrisJokesApiService]
    });
  });

  it('should be created', inject([ChuckNorrisJokesApiService], (service: ChuckNorrisJokesApiService) => {
    expect(service).toBeTruthy();
  }));
});

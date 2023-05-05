import { TestBed } from '@angular/core/testing';

import { AgMapApiService } from './map-api.service';

describe('AgMapApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgMapApiService = TestBed.inject(AgMapApiService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AgGeocodeApiService } from './geocode-api.service';

describe('GeocodeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgGeocodeApiService = TestBed.inject(AgGeocodeApiService);
    expect(service).toBeTruthy();
  });
});

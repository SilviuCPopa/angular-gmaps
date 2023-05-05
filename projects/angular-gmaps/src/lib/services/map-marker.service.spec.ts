import { TestBed } from '@angular/core/testing';

import { MapMarkerService } from './map-marker.service';

describe('MapMarkerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapMarkerService = TestBed.inject(MapMarkerService);
    expect(service).toBeTruthy();
  });
});

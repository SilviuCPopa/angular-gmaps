import { Injectable } from '@angular/core';
import { AgMapLoaderService } from './map-loader.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgGeocodeApiService {

  geocoder: google.maps.Geocoder;

  constructor(private mapLoaderService: AgMapLoaderService) { }

  async initGeocode(): Promise<void> {
    if (!this.geocoder) {
      await this.mapLoaderService.loadMap();
      this.geocoder = new google.maps.Geocoder();
    }
  }

  async initAutocomplete(input: HTMLInputElement) {
    await this.mapLoaderService.loadMap();
    return new google.maps.places.SearchBox(input);
  }

  geocodeAddress(address: string): Promise<any[]> {
    if (!address.length) {
      return of([]).toPromise();
    }
    return new Promise( (resolve, revoke) => {
      this.geocoder.geocode({ address }, (results: any, status: string) => {
        if (status === 'OK') {
          resolve(results);
        }
      });
    });
  }
}

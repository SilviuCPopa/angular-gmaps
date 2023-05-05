import { Injectable } from '@angular/core';
import { AgMapLoaderService } from './map-loader.service';
import { MapOptions, AgCoordinates } from '../interfaces/map-types.interface';
import { DARK_MODE_STYLES } from '../config/map.config';

@Injectable({
  providedIn: 'root'
})
export class AgMapApiService {

  private mapObj: Promise<google.maps.Map>;
  private mapLoaded: (map?: google.maps.Map) => void;

  constructor(
    private mapLoaderService: AgMapLoaderService,
    ) {}

  createMap(mapElement: HTMLElement, mapOptions: MapOptions) {
    this.mapObj = new Promise<google.maps.Map>((resolve: (map: google.maps.Map) => void) => {
      this.mapLoaded = resolve;
    });

    this.mapLoaderService.loadMap().then(() => {
      const map = new google.maps.Map(mapElement, mapOptions);
      this.mapLoaded(map as google.maps.Map);
    }).catch( () => {});
  }

  setDarkMode() {
    this.getMap().then( (map: google.maps.Map) => {
      map.setOptions( { styles: DARK_MODE_STYLES});
    });
  }

  getMap(): Promise<google.maps.Map> {
    return this.mapObj;
  }

  async centerMap(center: AgCoordinates) {
    const map = await this.getMap();
    map.setCenter(center);
  }
}

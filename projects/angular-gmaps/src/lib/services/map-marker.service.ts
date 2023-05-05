import { Injectable } from '@angular/core';
import { AgMapApiService } from './map-api.service';
import { MapCoordinates } from '../interfaces/map-types.interface';
import { AgMapMarkerComponent } from '../components/map-markers/map-marker.component';

@Injectable({
  providedIn: 'root'
})
export class MapMarkerService {

  private markers: Map<AgMapMarkerComponent, google.maps.Marker> = new Map<AgMapMarkerComponent, google.maps.Marker>();

  constructor(private mapApiService: AgMapApiService) { }

  async addMarker(marker: AgMapMarkerComponent): Promise<google.maps.Marker> {
    const markerRef = await this.setMapMarker(marker);
    this.markers.set(marker, markerRef);

    if (marker.showInfo) {
      this.handleInfoWindow(marker);
    }
    return markerRef;
  }

  updatePosition(marker: AgMapMarkerComponent, position: MapCoordinates) {
    return this.markers.get(marker).setPosition(position);
  }

  updateIcon(marker: AgMapMarkerComponent) {
    return this.markers.get(marker).setIcon(marker.icon);
  }

  enable(marker: AgMapMarkerComponent) {
    return this.markers.get(marker).setClickable(true);
  }

  disable(marker: AgMapMarkerComponent) {
    return this.markers.get(marker).setClickable(false);
  }

  getMarker(marker: AgMapMarkerComponent) {
    return this.markers.get(marker);
  }

  async deleteMarker(marker: AgMapMarkerComponent) {
    const selectedMarker = this.markers.get(marker);
    if (selectedMarker) {
      this.markers.get(marker).setMap(null);
      this.markers.delete(marker);
    }
  }

  private async handleInfoWindow(marker: AgMapMarkerComponent) {
    const map = await this.mapApiService.getMap();
    const markerRef = this.markers.get(marker);
    markerRef.addListener('click', () => {
      marker.infoWidnow.ref.open(map, markerRef);
    });
  }

  private async setMapMarker( marker: AgMapMarkerComponent): Promise<google.maps.Marker> {
    const mapRef = await this.mapApiService.getMap();
    return new google.maps.Marker({
      ...marker,
      map: mapRef
    });
  }
}

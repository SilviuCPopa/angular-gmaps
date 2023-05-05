import { Injectable } from '@angular/core';
import { AgMapApiService } from './map-api.service';
import { AgCoordinates, AgWayPoints } from '../interfaces/map-types.interface';

@Injectable({
    providedIn: 'root'
})
export class AgDrawDirectionApiService {

    directionsService: google.maps.DirectionsService;
    directionsRenderer: google.maps.DirectionsRenderer;

    constructor(private mapApiService: AgMapApiService) { }

    async drawDirections(startPoint: AgCoordinates, endPoint: AgCoordinates, waypoints?: AgWayPoints[]) {
        const map = await this.mapApiService.getMap();
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer({
            draggable: true,
            map
        });
        this.displayRoute(startPoint, endPoint, waypoints);
    }

    displayRoute(start: AgCoordinates, end: AgCoordinates, waypoints: any[] = []) {
        this.directionsService.route({
          origin: start,
          destination: end,
          optimizeWaypoints: true,
          travelMode: google.maps.TravelMode.DRIVING,
          avoidTolls: false,
          waypoints
        }, (response: any, status: string) => {
          if (status === 'OK') {
            this.directionsRenderer.setDirections(response);
          }
        });
    }

    removeDirections() {
        if (this.directionsRenderer) {
            this.directionsRenderer.setMap(null);
        }
    }
}

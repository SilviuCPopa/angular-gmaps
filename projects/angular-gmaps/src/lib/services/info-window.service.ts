import { Injectable, ElementRef } from '@angular/core';
import { AgMapApiService } from './map-api.service';

@Injectable({
    providedIn: 'root'
  })
  export class AgInfoWindowApiService {

    constructor(private mapApiService: AgMapApiService) { }

    async addInfoWindow(content: ElementRef): Promise<google.maps.InfoWindow> {
      await this.mapApiService.getMap();
      return new google.maps.InfoWindow({
          content: content.nativeElement.innerHTML
      });
    }
  }

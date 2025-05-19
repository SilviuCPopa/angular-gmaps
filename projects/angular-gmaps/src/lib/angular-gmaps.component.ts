import { Component, OnInit, ViewChild, Input, ContentChild } from '@angular/core';
import { DARK_MODE_STYLES, DEFAULT_ZOOM_CONTROL_OPTIONS } from './config/map.config';
import { AgMapApiService } from './services/map-api.service';
import { MapTypeEnum, MapCoordinates } from './interfaces/map-types.interface';
import { AgMapMarkerListComponent } from './components/map-markers/map-marker-list.component';
import { AgDrawDirectionComponent } from './components/draw-direction/draw-direction.component';

@Component({
    selector: 'ag-drapp-maps',
    templateUrl: './angular-gmaps.component.html',
    styles: [` #ag-map {
    width: 100%;
    height: 100%;
  }`],
    standalone: false
})
export class AgMapsComponent implements OnInit {

  @Input() darkMode: boolean = false;

  @Input() center: MapCoordinates;

  @Input() zoom: number = 12;

  @Input() zoomControl: boolean = true;

  @Input() zoomControlOptions = DEFAULT_ZOOM_CONTROL_OPTIONS;

  @Input() disableDefaultUI: boolean = true;

  @Input() mapTypeId: MapTypeEnum = MapTypeEnum.roadmap;

  @ContentChild(AgMapMarkerListComponent) markerList: AgMapMarkerListComponent;

  @ContentChild(AgDrawDirectionComponent) directionList: AgMapMarkerListComponent = null;

  @ViewChild('mapContainer', { static: true }) mapElement: any;

  styles: any[] = [];

  constructor(private mapApiService: AgMapApiService) { }

  ngOnInit() {
    this.styles = this.darkMode ? DARK_MODE_STYLES : [];
    this.mapApiService.createMap(this.mapElement.nativeElement, this);
  }
}

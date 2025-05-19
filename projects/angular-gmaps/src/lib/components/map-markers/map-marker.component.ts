import { Component, Input, ContentChild, OnChanges, SimpleChanges, OnInit, OnDestroy, SimpleChange } from '@angular/core';
import { AgInfoWindowComponent } from '../info-window/info-window.component';
import { MapMarkerService } from '../../services/map-marker.service';
import { MapCoordinates, MarkerLabel, MarkerIcon, MarkerPath } from '../../interfaces/map-types.interface';

@Component({
    selector: 'ag-map-marker',
    template: '',
    standalone: false
})
export class AgMapMarkerComponent implements OnInit, OnChanges, OnDestroy {

  @Input() position: MapCoordinates;

  @Input() draggable: boolean = false;

  @Input() label: MarkerLabel | string;

  @Input() animation: google.maps.Animation = google.maps.Animation.DROP;

  @Input() icon: MarkerIcon | MarkerPath;

  @Input() active: boolean = true;

  @Input() showInfo: boolean = false;

  @ContentChild(AgInfoWindowComponent, { static: true }) infoWidnow: AgInfoWindowComponent;

  constructor(private markerService: MapMarkerService) {}

  ngOnInit() {
    this.markerService.addMarker(this);
  }

  ngOnChanges(changes: SimpleChanges) {

    if (!this.markerService.getMarker(this)) {
      return;
    }

    if (changes['active']) {
      this.setMarkerActiveState();
    }

    if (this.isPositionChanged(changes['position'])) {
      this.markerService.updatePosition(this, this.position);
    }
  }

  private isPositionChanged(position: SimpleChange) {
    return position && (
      position.previousValue.lat !== position.currentValue.lat ||
      position.previousValue.lng !== position.currentValue.lng);
  }

  private setMarkerActiveState() {
    if (this.active) {
      return this.markerService.enable(this);
    }
    return this.markerService.disable(this);
  }

  ngOnDestroy() {
    this.markerService.deleteMarker(this);
  }
}

import { Component, QueryList, ContentChildren } from '@angular/core';
import { AgMapMarkerComponent } from './map-marker.component';

@Component({
  selector: 'ag-markers-list',
  template: ''
})
export class AgMapMarkerListComponent {

  @ContentChildren(AgMapMarkerComponent) markers: QueryList<AgMapMarkerComponent>;

}

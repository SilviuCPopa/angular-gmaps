
# Angular Gmaps

Angular Gmaps is a library that make google maps integration easier with angular

## Getting started

Import angular gmaps module into your app's module:

    import {NgModule} from '@angular/core';
    import {DrappMapsModule, AgGeocodeApiService} from 'angular-gmaps';
    @NgModule({
     imports: [DrappMapsModule.forRoot({
		     apiKey: '<MAPS_API_KEY>',
		     apiUrl: '<MAPS_API_URL>'
	     )],
     providers: [
		     // You can provide here a different service for google autocomplete locations
		     { provide: FORM_GEOCODE_AUTOCOMPLETE, useClass: AgGeocodeApiService }
	     ]
     })
     export class AppModule{}

 Finally connect the component in  template:
```
 <ag-drapp-maps #agMap [darkMode]="true" [center]="{ lat: 0.00, lng: 0.00 }">
	 <ag-markers-list>
		 <ag-map-marker #ag-marker
				 [showInfo]="true"
				 [active]="true"
				 [animation]="0"
				 [label]="{ text: 'D', color: 'white' }"
				 [position]="{ lat: 3.00, lng: 3.00 }">
			 <ag-info-window [title]="'window title'" [content]="'hellow world'">
				 <p>more content</p>
			 </ag-info-window>
		 </ag-map-marker>
		 <ag-draw-direction [start]="startLocation"
				    [end]="endLocation">
	     </ag-draw-direction>
	 </ag-markers-list>
 </ag-drapp-maps>
 ```

 ## Documentation
#### API reference for Angular Gmaps
    import { DrappMapsModule } from 'angular-gmaps';
#### AgMapsComponent
Component responsible for managing the map

Selector: `ag-drapp-maps`

**Properties**

| Name | Description |
|------|-------------|
| @Input()
  darkMode: boolean| If is set to true the maps will have the dark mode styles applied. Default is **false** |
| @Input()
  center: MapCoordinates| Map coordinates object "{ lat: 0.00, lng: 0.00 }" |
| @Input()
  zoom: number| Maps zoom as a number. Default is **"12"**
| @Input()
  zoomControl: boolean| Boolean flag which enables zooming buttons on the map |
| @Input()
  zoomControlOptions : object | Zoom default configuration Default: "{ style: 1, position: 9 }"|
| @Input()
  disableDefaultUI: boolean | Disable google maps default UI option. Default is **'true'**  |
| @Input()
  mapTypeId: MapTypeEnum | Map types, choose one of (**'roadmap', 'hybrid', 'satellite', 'terrain'**). Default is **'roadmap'** |

#### AgMapMarkerComponent
Component responsible for managing the map markers

Selector: `ag-map-marker`

**Properties**

| Name | Description |
|------|-------------|
| @Input()
  draggable: boolean| Ability to move the marker on the map. Default is **false** |
| @Input()
  position: MapCoordinates| Map coordinates object "{ lat: 0.00, lng: 0.00 }" |
| @Input()
  label: string | Marker label
| @Input()
  animation: number| Google maps supported animations. Default is **2**|
| @Input()
  icon: MarkerIcon or MarkerPath | Icon url to render instead of the default icons for markers|
| @Input()
  active: boolean | Flag to enable or disable the marker |
| @Input()
  showInfo: boolean| Enable or disable info tooltip when clicking the marker |

#### AgDrawDirectionComponent
Component responsible for managing the directions between two points on the map

Selector: `ag-draw-direction`

**Properties**

| Name | Description |
|------|-------------|
| @Input()
  start: MapCoordinates| Map coordinates object "{ lat: 0.00, lng: 0.00 }" |
| @Input()
  end: MapCoordinates| Map coordinates object "{ lat: 0.00, lng: 0.00 }" |
| @Input()
  waypoints: AgWayPoints[] | Array of coordinates for stop points **{ location: AgCoordinates, stopover: boolean }**|

#### AgInfoWindowComponent
Component responsible for managing the tooltip for markers on the map

Selector: `ag-info-window`

**Properties**

| Name | Description |
|------|-------------|
| @Input()
  title: string| Tooltip title |
| @Input()
  content: string| Tooltip content|
| @ViewChild()
  customContent: ElementRef | Custom content of the tooltip (template/component etc)|

## Development

### Prepare your environment

Install local dev dependencies: `npm install` while current directory is this repo.

### Development server

Run `npm start` to start a development server on a port 4200.

Open `http//:localhost:4200` on your browser.

## Tests

Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

## License

MIT

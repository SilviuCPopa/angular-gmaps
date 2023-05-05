
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

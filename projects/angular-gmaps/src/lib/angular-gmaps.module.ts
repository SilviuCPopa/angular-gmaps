import { NgModule, ModuleWithProviders } from '@angular/core';
import { AgMapsComponent } from './angular-gmaps.component';
import { AgMapMarkerListComponent } from './components/map-markers/map-marker-list.component';
import { AgMapMarkerComponent } from './components/map-markers/map-marker.component';
import { MAP_CONFIG } from './config/map.config';
import { MapsConfig } from './interfaces/map-types.interface';
import { AgInfoWindowComponent } from './components/info-window/info-window.component';
import { CommonModule } from '@angular/common';
import { AgDrawDirectionComponent } from './components/draw-direction/draw-direction.component';

const EXPORT_COMPONENTS = [
  AgMapsComponent,
  AgMapMarkerComponent,
  AgMapMarkerListComponent,
  AgInfoWindowComponent,
  AgDrawDirectionComponent
];

@NgModule({
  declarations: [
    ...EXPORT_COMPONENTS,
  ],
  exports: [
    ...EXPORT_COMPONENTS
  ],
  imports: [
    CommonModule
  ]
})
export class AGMapsModule {
  static forRoot(lazyMapConfigLoader: MapsConfig): ModuleWithProviders<AGMapsModule> {
    return {
      ngModule: AGMapsModule,
      providers: [
        { provide: MAP_CONFIG, useValue: lazyMapConfigLoader },
      ]
    };
  }
 }

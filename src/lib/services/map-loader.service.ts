import { Inject, Injectable, Optional } from '@angular/core';
import { MapsConfig } from '../interfaces/map-types.interface';
import { MAP_CONFIG } from '../config/map.config';

@Injectable({
    providedIn: 'root'
})
export class AgMapLoaderService {
    private readonly scriptId: string = 'drapp-maps-script';
    private readonly initMapCallback: string = 'initMap';
    private readonly libraries: string[] = ['places'];
    private config: MapsConfig;

    constructor(@Optional() @Inject(MAP_CONFIG) mapConfig: MapsConfig) {
        this.config = mapConfig || {};
    }

    loadMap(): Promise<boolean> {
        return new Promise((resolve) => {
            if (this.isScriptOnPage()) {
                resolve(true);
                return;
            }
            this.loadScript(resolve);
        });
    }

    private isScriptOnPage(): boolean {
        const scriptElem = document.getElementById(this.scriptId);
        return !!scriptElem;
    }

    private loadScript(callback: any) {
        this.insertScriptOnDom();
        window[this.initMapCallback] = () => {
            callback(true);
        };
        window.onerror = () => {
            callback(false);
        };
    }

    private insertScriptOnDom() {
        const body: HTMLElement = document.body;
        const script = document.createElement('script');
        script.src = `${this.config.apiUrl}?key=${this.config.apiKey}
            &callback=${this.initMapCallback}&libraries=${this.libraries.join('')}`;
        script.id = this.scriptId;
        script.async = true;
        script.defer = true;
        body.appendChild(script);
    }
  }

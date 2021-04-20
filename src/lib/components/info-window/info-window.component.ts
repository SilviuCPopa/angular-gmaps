import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AgInfoWindowApiService } from '../../services/info-window.service';

@Component({
  selector: 'ag-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.scss']
})
export class AgInfoWindowComponent implements AfterViewInit {

  @Input() title: string;

  @Input() content: string;

  @ViewChild('defaultContent', { read: ElementRef }) defaultContent: ElementRef;

  @ViewChild('customContent') customContent: ElementRef;

  ref: google.maps.InfoWindow;

  constructor(private infoWindowService: AgInfoWindowApiService) {}

  async ngAfterViewInit() {
   this.ref = await this.addInfoWindow();
  }

  private addInfoWindow(): Promise<google.maps.InfoWindow> {
    if (this.title || this.content) {
      return this.infoWindowService.addInfoWindow(this.defaultContent);
    }
    return this.infoWindowService.addInfoWindow(this.customContent);
  }
}

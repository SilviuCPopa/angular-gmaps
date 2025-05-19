import { Component, Input, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { AgDrawDirectionApiService } from '../../services/draw-direction.service';
import { AgCoordinates, AgWayPoints } from '../../interfaces/map-types.interface';


@Component({
    selector: 'ag-draw-direction',
    template: '',
    standalone: false
})
export class AgDrawDirectionComponent implements OnChanges, OnDestroy {

    @Input() start: AgCoordinates;

    @Input() end: AgCoordinates;

    @Input() waypoints: AgWayPoints[] = [];

    constructor(private drawDirectionService: AgDrawDirectionApiService) {}

    ngOnChanges(changes: SimpleChanges) {
        if (changes['start'] && changes['start'].currentValue !== changes['start'].previousValue) {
          this.drawDirectionService.removeDirections();
          this.drawDirectionService.drawDirections(this.start, this.end, this.waypoints);
        }
    }

    ngOnDestroy() {
        this.drawDirectionService.removeDirections();
    }
}

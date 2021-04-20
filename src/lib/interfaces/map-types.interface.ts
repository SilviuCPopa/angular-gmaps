export interface MapsConfig {
    apiKey?: string;
    mode?: string;
    apiUrl?: string;
}
export interface MapCoordinates {
    lat: number;
    lng: number;
}

export class AgCoordinates implements MapCoordinates {
    lat: number;
    lng: number;

    constructor(latitude: number, longitude: number) {
        this.lat = latitude;
        this.lng = longitude;
    }
}

export enum MapTypeEnum {
    roadmap = 'roadmap',
    hybrid = 'hybrid',
    satellite = 'satellite',
    terrain = 'terrain'
}

export interface MapOptions {
    center: MapCoordinates;
    zoom?: number;
    disableDefaultUI?: boolean;
    mapTypeId?: MapTypeEnum;
    styles?: any[];
    zoomControl?: boolean;
    dragable?: boolean;
}

export interface MarkerLabel {
    text: string;
    color?: string;
}

export interface MarkerPath extends google.maps.Symbol {
    path: google.maps.SymbolPath;
    scale?: number;
    strokeColor?: string;
}

export interface MarkerIcon extends google.maps.ReadonlyIcon {
    url: string;
}

export interface MarkerOptions {
    draggable: boolean;
    animation: google.maps.Animation;
    position: MapCoordinates;
    icon: MarkerPath | MarkerIcon;
}

export interface AgWayPoints {
    location: AgCoordinates;
    stopover: boolean;
}

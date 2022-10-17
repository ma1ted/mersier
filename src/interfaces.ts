export interface IGeoPoint {
    lat: number;
    lon: number;
}

export interface IStation {
    name: string;
    position: IGeoPoint;
    crs: string;
    tiploc: string;
}

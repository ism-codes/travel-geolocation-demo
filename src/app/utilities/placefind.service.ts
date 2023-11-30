import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import creds from "../../../credentials.json"
@Injectable({
  providedIn: 'root'
})
export class PlacefindService {
  
  constructor(private http: HttpClient) { }

  apikey = creds.arcgis.apikey
  placeURL = `https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?f=json&token=${this.apikey}&text=`;
  coordURL = `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&token=${this.apikey}&address=`;

  getConfig(val: string) {
    return this.http.get(this.placeURL+val);
  }
  getCoord(val: string) {
    console.log(this.http.get(this.coordURL+val))
      return this.http.get(this.coordURL+val);
  }

}

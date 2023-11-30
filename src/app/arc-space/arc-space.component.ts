import { Component, OnInit } from '@angular/core';
import Map from '@arcgis/core/Map.js'
import MapView from '@arcgis/core/views/MapView';
import Search from '@arcgis/core/widgets/Search';
import esriConfig from "@arcgis/core/config.js"
import solve from "@arcgis/core/rest/route.js"
import RouteParameters from '@arcgis/core/rest/support/RouteParameters.js'
import FeatureSet from '@arcgis/core/rest/support/FeatureSet.js'
import Graphic from '@arcgis/core/Graphic.js'
import Feature from "@arcgis/core/widgets/Feature.js";
import Point from "@arcgis/core/geometry/Point.js";
import creds from "../../../credentials.json"
import { PlacefindService } from '../utilities/placefind.service';
@Component({
  selector: 'app-arc-space',
  templateUrl: './arc-space.component.html',
  styleUrls: ['./arc-space.component.css']
})
export class ArcSpaceComponent implements OnInit{
  apiKey = creds.arcgis.apikey
  
  ngOnInit(): void {
  //ApiKey that all ArcGIS components will refer to
    esriConfig.apiKey = this.apiKey
    this.basicMapCreate()  
    this.simpleAutofillSearch()
  }

  // Function to create a basic map from SDK
  basicMapCreate(){
    //This generates the map for MapView to use
      const map = new Map({
        basemap: "arcgis-navigation-night"
      });
  
    //Places the MapView in the html container that has the id of "mapDiv"
      const view = new MapView({
        map: map,
        center: [-117.182270,34.055810], // Longitude, latitude
        zoom: 10, // Zoom level
        container: "mapDiv", // Div element
      });
  }

  // Function to create a basic search bar from SDK
  simpleAutofillSearch(){
    const search = new Search({
      autoSelect: true,
      container: "searchDiv",
      locationEnabled:true
    });
  }
}

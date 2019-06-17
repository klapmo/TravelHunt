/// <reference types="@types/googlemaps" />

import { Component, OnInit, ViewChild, ElementRef, NgZone, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AgmMap, MapsAPILoader } from '@agm/core';
import * as _ from 'lodash';

class Address {
  id?: number;
  street?: string;
  additionalInfo?: string;
  lat?: number;
  lng?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  autoComplete: google.maps.places.Autocomplete;

    directionsService: google.maps.DirectionsService;
    directionsRequest: google.maps.DirectionsRequest;
    directionsDisplay: google.maps.DirectionsRenderer;

    distance: number;

    addresses: Address[];

    // markers labels
    alphabeticLabels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    labelIndex: number;

    // google maps zoom level
    zoom = 11;

    // initial center position for the map
    lat = 18.109581;
    lng = -77.297508;

    searchControl: FormControl;

    markers: any[] = [];

    readonly TAX = 4;

    idListener: google.maps.MapsEventListener;

    @ViewChild('search') public searchElement: ElementRef;
    @ViewChild(AgmMap) public maps: AgmMap;

    constructor(
        private mapsApiLoader: MapsAPILoader,
        private ngZone: NgZone,
    ) {}

    ngOnInit() {
        this.searchControl = new FormControl();
        this.initializeRouteAndComponents();
        this.setGoogleMaps();
        this.getPosition().then(pos=>
            {
               console.log(`Positon: ${pos.lng} ${pos.lat}`);
               this.lat = pos.lat;
               this.lng = pos.lng;
            });

    }

    setGoogleMaps(): void {
        this.maps.mapReady.subscribe(
            mapReady => this.directionsDisplay.setMap(mapReady),
            e => console.log('Error setting map in DirectionRenderer', e)
        );

        this.labelIndex = 0;

        this.mapsApiLoader
            .load()
            .then(() => {
                // services have to be initialized inside MapsApiLoader to work
                this.initializeGoogleMapsServices();

                this.setPlacesAutocomplete();

                // workaround to restrict Autocomplete to get addresses within the chosen city boundaries
                this.maps.boundsChange.subscribe(bounds => this.autoComplete.setBounds(bounds));

                this.setupPlaceChangedListener();
            })
            .catch(e => console.log('Error loading MapsApi', e));
    }

    getPosition(): Promise<any>
    {
      return new Promise((resolve, reject) => {
  
        navigator.geolocation.getCurrentPosition(resp => {
  
            resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
          },
          err => {
            reject(err);
          });
      });
  
    }

    setupPlaceChangedListener(): void {
        this.idListener = this.autoComplete.addListener('place_changed', () => {
            console.log('Setting listener');
            this.ngZone.run(() => {
                const place = this.autoComplete.getPlace();

                if (!place.place_id || place.geometry === undefined || place.geometry === null) {
                    console.log('Place not found');
                    return;
                }

                const latitude = place.geometry.location.lat();
                const longitude = place.geometry.location.lng();

                const address = {
                    street: place.formatted_address,
                    additionalInfo: place.name,
                    lat: latitude,
                    lng: longitude
                } as Address;

                this.addresses.push(address);

                this.markers.push({
                    lat: latitude,
                    lng: longitude,
                    label: this.alphabeticLabels[this.labelIndex++ % this.alphabeticLabels.length]
                });

                console.log('Markers list: ', JSON.stringify(this.markers));
                this.searchControl.reset();
                // this.drawRoute();
            });
        });
    }

    drawRoute(index: number): void {
        // const length = this.markers.length;
        // if (!(length >= 2)) {
        //     return;
        // }

        this.setDirectionsRequest(index);

        // if (length > 2) {
        //     if (length >= 12) {
        //         console.log('Google taxes for more than 10 waypoints. Be careful');
        //         return;
        //     }
            const waypoints: google.maps.DirectionsWaypoint[] = [];
            // const user_loc: google.maps.DirectionsWaypoint = {location: {lat:this.lat,lng:this.lng}, stopover: null}
            const marker_loc: google.maps.DirectionsWaypoint = {location: this.markers[index], stopover: null}
            // this.markers.slice(1, this.markers.length - 1)
            //     .forEach(coordinates => {
            //         const way: google.maps.DirectionsWaypoint = {location: coordinates, stopover: null};
            //         waypoints.push(way);
            //     });
            // waypoints.push(user_loc)
            waypoints.push(marker_loc)
            this.directionsRequest.waypoints = waypoints;
            console.log('Waypoints: ', JSON.stringify(waypoints));
        // }

        this.callDirectionServiceRoute();

    }

    setDirectionsRequest(index): void {
        // this.directionsRequest.origin = _.first(this.markers);
        this.directionsRequest.origin = {lat:this.lat,lng:this.lng};
        this.directionsRequest.destination = this.markers[index]
        this.directionsRequest.travelMode = google.maps.TravelMode.DRIVING;
        this.directionsRequest.optimizeWaypoints = true;
    }

    callDirectionServiceRoute(): void {
        this.directionsService.route(
            this.directionsRequest,
            (
                response: google.maps.DirectionsResult,
                status: google.maps.DirectionsStatus
            ) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.directionsDisplay.setDirections(response);
                    this.calcDistance(response);
                } else {
                    console.log('Failed to display directions');
                }
            }
        );
    }

    calcDistance(response: google.maps.DirectionsResult) {
        const route: google.maps.DirectionsRoute = response.routes[0];
        let distance = 0;
        for (let i = 0; i < route.legs.length; i++) {
            distance += route.legs[i].distance.value;
        }
        this.distance = parseFloat(((distance / 1000)/1.609).toFixed(2));
        console.log('Distance total: ', this.distance);
    }

    removeMarker(index){
        this.addresses.splice(index,1);
        this.markers.splice(index,1);
    }



    trackByIndex(index: number, obj: any): any {
        return index;
    }

    ngOnDestroy() {
        google.maps.event.removeListener(this.idListener);
    }

    initializeGoogleMapsServices(): void {
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRequest = {} as google.maps.DirectionsRequest;
        this.directionsDisplay = new google.maps.DirectionsRenderer();
    }

    setPlacesAutocomplete(): void {
        this.autoComplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement);
        // this.autoComplete.setTypes(['address']);
        // this.autoComplete.setComponentRestrictions({country: 'br'});
    }

    initializeRouteAndComponents(): void {
        this.addresses = [];
        this.markers = [];
    }
}

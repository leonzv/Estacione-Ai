import React, { Component, Fragment } from 'react';
import 'react-native-gesture-handler';
import {View} from 'react-native';
import Style from '../style/style.js';
import MapView, { PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import markerImage from '../img/marker.png';

var GOOGLE_MAPS_APIKEY = 'AIzaSyCVi8UToRxa35GXIConEw7JTIJKQT400CI';
var mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]
export default class Map extends Component {
  state = {
    region: null,
    destination: null,
    duration: null,
    location: null
  };
  
      async componentDidMount() {
        navigator.geolocation.getCurrentPosition(
          async ({ coords: { latitude, longitude } }) => {
            const response = await Geocoder.from({ latitude, longitude });
            const address = response.results[0].formatted_address;
            const location = address.substring(0, address.indexOf(","));
    
            this.setState({
              location,
              region: {
                latitude,
                longitude,
                latitudeDelta: 0.0143,
                longitudeDelta: 0.0134
              }
            });
          }, //sucesso
          () => {}, //erro
          {
            timeout: 2000,
            enableHighAccuracy: true,
            maximumAge: 1000
          }
        );
      }
    
      handleLocationSelected = (data, { geometry }) => {
        const {
          location: { lat: latitude, lng: longitude }
        } = geometry;
    
        this.setState({
          destination: {
            latitude,
            longitude,
            title: data.structured_formatting.main_text
          }
        });
      };
    
      handleBack = () => {
        this.setState({ destination: null });
      };
    
      render() {
        const { region, destination} = this.state;
    
        return (
          <View style={{ flex: 1 }}>
            <MapView
              style={{ flex: 1 }}
              region={region}
              showsUserLocation
              loadingEnabled
              ref={el => (this.mapView = el)}
              provider={PROVIDER_GOOGLE}
              customMapStyle={mapStyle}
            >
              {destination && (
                <Fragment>
                  <Directions
                    origin={region}
                    destination={destination}
                    onReady={result => {
                      this.setState({ duration: Math.floor(result.duration) });
    
                      this.mapView.fitToCoordinates(result.coordinates, {
                        edgePadding: {
                          right: getPixelSize(50),
                          left: getPixelSize(50),
                          top: getPixelSize(50),
                          bottom: getPixelSize(350)
                        }
                      });
                    }}
                  />
                  <Marker
                    coordinate={destination}
                    anchor={{ x: 0, y: 0 }}
                    image={markerImage}
                  >
                    <LocationBox>
                      <LocationText>{destination.title}</LocationText>
                    </LocationBox>
                  </Marker>
    
                  <Marker coordinate={region} anchor={{ x: 0, y: 0 }}>
                  </Marker>
                </Fragment>
              )}
            </MapView>
            <View>
                    
            </View>
            <View style={{flexDirection = 'column',}}>

            </View>
          </View>
        );
      }
    }


import {View, Text, Image, TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import ModalGps from "../components/modalGps";
import Style from "../style/style.js";
import "react-native-gesture-handler";
import React, { Component } from "react";
import {FONTS,COLORS,SIZES} from '../constants';
const Gps = ({route, navigation}) => {

const GOOGLE_API_KEY = 'AIzaSyDaJUFUIRPgP0kPOCF350ZOqPoYmPxrZ-w';
var mapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#757575",
      },
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#181818",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1b1b1b",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#2c2c2c",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8a8a8a",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#373737",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#3c3c3c",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#4e4e4e",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3d3d3d",
      },
    ],
  },
];
  const mapView = React.useRef();

  const [region, setRegion] = React.useState(mapRegion);
  const [duration, setDuration] = React.useState(0);
  const [isReady, setIsReady] = React.useState(false);
  const [angle, setAngle] = React.useState(0);

  const currentLocation = {
    streetName: 'Star Park',
    gps: {
      latitude: -23.5489,
      longitude: -46.6382,
    },
  };
  const vaga = {
    gps: {
      latitude: -23.5442,
      longitude: -46.6312,
    },
  };
    const fromLoc = currentLocation.gps;
    const toLoc = vaga.gps;
    const street = currentLocation.streetName;

    const mapRegion = {
      latitude: (fromLoc.latitude + toLoc.latitude) / 2,
      longitude: (fromLoc.longitude + toLoc.longitude) / 2,
      latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
      longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
    };

  function renderMap() {
    const destinationMarker = () => (
      <Marker coordinate={toLoc}>
        <View
          style={{
            height: 30,
            width: 30,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.white,
          }}
        >
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.primary,
            }}
          >
            <Image
              source={'../assets/img/marker.png'}
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.white,
              }}
            />
          </View>
        </View>
      </Marker>
    );

    const carIcon = () => (
      <Marker
        coordinate={fromLoc}
        anchor={{x: 0.5, y: 0.5}}
        flat={true}
        rotation={angle}
      >
        <Image
          source={'../assets/img/car.png'}
          style={{
            width: 40,
            height: 40,
          }}
        />
      </Marker>
    );

    return (
      <View style={{flex: 1}}>
        <MapView
          ref={mapView}
          provider={PROVIDER_GOOGLE}
          initialRegion={region}
          style={{height: '100%', width: '100%'}}
          customMapStyle={mapStyle}
        >
          <MapViewDirections
            origin={fromLoc}
            destination={toLoc}
            apikey={GOOGLE_API_KEY}
            strokeWidth={5}
            strokeColor={COLORS.primary}
            optimizeWaypoints={true}
            onReady={result => {
              setDuration(result.duration);

              if (!isReady) {
                // Fit route into maps
                mapView.current.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: SIZES.width / 20,
                    bottom: SIZES.height / 4,
                    left: SIZES.width / 20,
                    top: SIZES.height / 8,
                  },
                });
                                   
                setIsReady(true);
              }
            }}
          />
          {destinationMarker()}
          {carIcon()}
        </MapView>
        <View style={Style.mapDrawerOverlay} />
        <View style={Style.headerGps}>
          <Text style={Style.textGps}>Bem vindo, João!</Text>
        </View>
        <View style={{ flex: 1 }}>
          <View>
          <ModalGps />
          <TouchableOpacity style={Style.gpsBtnVermelho}><Text style={Style.textBtnGps}>0</Text></TouchableOpacity>
          <TouchableOpacity style={Style.gpsBtnVerde}><Text style={Style.textBtnGps}>20</Text></TouchableOpacity>
          </View>
          <View style={{flex: 1, justifyContent: 'flex-end',}}>
            <TouchableOpacity
              style={Style.boxGps}
              onPress={() => this.props.navigation.navigate("Load")}
            >
              <Text style={Style.textBoxTop}>
                B U S C A R   N O V A M E N T E
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Style.boxGps}
              onPress={() => this.props.navigation.navigate("EditarDados")}
            >
              <Text style={Style.textBoxBot}>S A I R   D O   A P P</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  function renderDestinationHeader() {
    return (
      <View
        style={{
          position: 'absolute',
          top: 50,
          left: 0,
          right: 0,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: SIZES.width * 0.9,
            paddingVertical: SIZES.padding,
            paddingHorizontal: SIZES.padding * 2,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
          }}
        >
          <Image
            source={'../assets/img/marker.png'}
            style={{
              width: 30,
              height: 30,
              marginRight: SIZES.padding,
            }}
          />

          <View style={{flex: 1, marginTop: 30,}}>
            <Text style={{...FONTS.body3}}>{street}</Text>
          </View>

          <Text style={{...FONTS.body3}}>{Math.ceil(duration)} mins</Text>
        </View>
      </View>
    );
  }


  return (
    <View style={{flex: 1}}>
      {renderMap()}
      {renderDestinationHeader()}
    </View>
  );
};

export default Gps;

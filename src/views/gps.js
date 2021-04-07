import React, { Component } from "react";
import "react-native-gesture-handler";
import { View, Text, TouchableOpacity } from "react-native";
import Style from "../style/style.js";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import ModalGps from "../components/modalGps";
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

const hasLocationPermission = true;
async function requestPermissions() {
  if (Platform.OS === "ios") {
    Geolocation.requestAuthorization();
    Geolocation.setRNConfiguration({
      skipPermissionRequests: false,
      authorizationLevel: "whenInUse",
    });
  }

  if (Platform.OS === "android") {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
  }
}
export default class Map extends Component {
  componentDidMount() {
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ width: '100%', height: '100%' }}
          showsUserLocation
          loadingEnabled
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyle}
        ></MapView>
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
}

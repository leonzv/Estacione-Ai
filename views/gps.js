import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, TouchableOpacity} from 'react-native';
import Style from '../style/style.js';
import MapView from 'react-native-maps';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCVi8UToRxa35GXIConEw7JTIJKQT400CI';

export default function Gps(props) {
  return (
    <View style={{flex: 1,}}>
      <MapView
        style={{flex: 1,}}
        apikey={GOOGLE_MAPS_APIKEY}
        initialRegion={{
          latitude: 22.258,
          longitude: 71.19,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={Style.map}>
        <MapView.Marker
          coordinate={{
            latitude: -24.210271,
            longitude: -49.63627,
          }}
        />
      </MapView>
      <View style={Style.emergencyCallBox}>
        <View style={Style.emergencyCall}>
          <Text style={Style.textAcionar}>ACIONAR SEGURANÇA</Text>
        </View>
        <TouchableOpacity style={Style.btn190}>
          <Text style={Style.btnText190}>190</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
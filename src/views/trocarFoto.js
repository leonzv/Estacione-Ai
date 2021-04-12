import React, {useState} from "react";
import "react-native-gesture-handler";
import { View, Image, Text, TouchableOpacity, Alert } from "react-native";
import Style from "../style/style.js";


export default function TrocarFoto(props) {
   
  return (
    <View style={Style.blackgroundFoto}>
      <Text style={Style.textFotoTop}>Trocar foto</Text>
      <Text style={Style.textFoto}>Escolha uma foto de sua preferência</Text>
      <View style={Style.cameraBox}>
      </View>
      <View
        style={{
          justifyContent: 'flex-end', 
          alignItems: 'flex-end',
          alignSelf: 'flex-end',
          flex: 1,
          flexDirection: 'row',
        }}
      >
        <TouchableOpacity style={Style.tirarFotoBox}
        onPress={() => captureImage('photo')}>
          <Text style={Style.boxUp}>T I R A R  F O T O</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.buscarBox}
        onPress={() => chooseFile('photo')}>
          <Text style={Style.boxUp}>B U S C A R</Text>
        </TouchableOpacity>
      </View>
        <TouchableOpacity style={Style.concluirBox}
        >
          <Text style={Style.concluirText}
          onPress={() => props.navigation.navigate("LocationEnable")}> C O N C L U I R </Text>
        </TouchableOpacity>  
    </View>
  );
}

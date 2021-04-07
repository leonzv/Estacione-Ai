import React from "react";
import "react-native-gesture-handler";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Style from "../style/style.js";

export default function UpFoto(props) {
  return (
    <View style={Style.blackgroundFoto}>
      <Text style={Style.textFotoTop}>Inserir foto</Text>
      <Text style={Style.textFoto}>Escolha uma foto de sua preferência</Text>
      <View style={Style.cameraBox}>
        <Text>camera aqui</Text>
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
        <TouchableOpacity style={Style.tirarFotoBox}>
          <Text style={Style.boxUp}>T I R A R  F O T O</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.buscarBox}>
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

import React, { useState } from "react";
import { Text, View, TouchableOpacity,} from "react-native";
import Style from "../style/style";
import Modal from "../components/modal";


export default function Favoritos(props) {
  const {goBack} = props.navigation;

  return (
    <View style={Style.container}>
      <View style={Style.headerEditar}>
        <Text style={Style.textGps}>Bem vindo, João!</Text>
      </View>
      <View style={{ backgroundColor: "black", flex: 1,}}>
        <Text style={Style.textSettingsTop}>Favoritos</Text>
        <Text style={Style.textFavoritosTop}>
          Aqui estão seus estacionamentos salvos
        </Text>
        <View style={Style.boxFavoritos}>
          <Text style={Style.userText}>Joia Park</Text>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Modal />
          </View>
        </View>
        <View style={Style.boxFavoritos}>
          <Text style={Style.userText}>Estacionamento do zé</Text>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Modal />
          </View>
        </View>
        <View style={Style.boxFavoritos}>
          <Text style={Style.userText}>Parkcit</Text>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Modal />
          </View>
        </View>
      </View>
      <View style={{justifyContent: "flex-end" }}>
        <TouchableOpacity style={Style.voltarBoxCode}
        onPress={() => goBack()}>
          <Text style={Style.textVoltar}>V O L T A R</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

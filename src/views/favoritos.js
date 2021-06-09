import React, { useState } from "react";
import { Text, View, TouchableOpacity,} from "react-native";
import Style from "../style/style";
import Modal from "../components/modal";
import {CustomText} from "../components/CustomText";
export default function Favoritos({navigation, route}) {
  const {goBack} = navigation;
  return (
    <View style={Style.container}>
      <View style={Style.headerEditar}>
        <CustomText style={Style.textGps}>Bem vindo, João </CustomText>
      </View>
      <View style={{ backgroundColor: "black", flex: 1,}}>
        <CustomText fontType="h1" style={Style.textSettingsTop}>Favoritos</CustomText>
        <CustomText fontType="body4" style={Style.textFavoritosTop}>
          Aqui estão seus estacionamentos salvos
        </CustomText>
        <View style={Style.boxFavoritos}>
          <CustomText fontType="body4" style={Style.userText}>Joia Park</CustomText>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Modal navigation={navigation}/>
          </View>
        </View>
        <View style={Style.boxFavoritos}>
          <CustomText fontType="body4" style={Style.userText}>Estacionamento do zé</CustomText>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Modal navigation={navigation}/>
          </View>
        </View>
        <View style={Style.boxFavoritos}>
          <CustomText fontType="body4" style={Style.userText}>Parkcit</CustomText>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Modal navigation={navigation}/>
          </View>
        </View>
      </View>
      <View style={{justifyContent: "flex-end" }}>
        <TouchableOpacity style={Style.voltarBoxCode}
        onPress={() => goBack()}>
          <CustomText fontType="body3" style={Style.textVoltar}>V O L T A R</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

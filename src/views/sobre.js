import React from "react";
import { Text, View,TouchableOpacity} from "react-native";
import Style from "../style/style";
import {CustomText} from "../components/CustomText";

export default function Sobre(props) {
  const {goBack} = props.navigation;
  return (
    <View style={Style.containerDraw}>
      <View style={Style.headerEditar}>
        <CustomText fontType="h3" style={Style.textGps}>Bem vindo, João!</CustomText>
      </View>
      <View style={{ backgroundColor: "black" }}>
        <CustomText fontType="h1" style={Style.textSobreTop}>Sobre</CustomText>
      </View>
      <View style={Style.boxSobre}>
        <CustomText fontType="body4" style={Style.userText}>Estacione Aí</CustomText>
      </View>
      <View style={Style.boxSobre}>
        <CustomText fontType="body4" style={Style.userText}>Versão: 1.0</CustomText>
      </View>
      <View style={Style.boxSobre}>
        <CustomText fontType="body4" style={Style.userText}>2021</CustomText>
      </View>
    <View style={{flex:1,justifyContent: 'flex-end'}}>
      <TouchableOpacity style={Style.voltarBoxCode}
       onPress={() => goBack()}>
          <CustomText fontType="body3" style={Style.textVoltar}>V O L T A R</CustomText>
    </TouchableOpacity>
    </View>
    </View>
  );
}

import "react-native-gesture-handler";
import { View, Text, TouchableOpacity } from "react-native";
import Style from "../style/style";
import * as React from "react";

export default function LoadHome(props) {
  return (
    <View style={Style.containerLoad}>
      <View style={Style.blueCircle}>
        <View style={Style.redCircle}>
          <Text style={Style.porcentagemLoad}> 32% </Text>
        </View>
      </View>
      <Text style={Style.textLoad}>
        {" "}
        Aguarde enquanto preparamos tudo para você! :)
      </Text>
      <TouchableOpacity
        style={Style.btnReady}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Text style={Style.btnComecarFont}> Tudo pronto! </Text>
      </TouchableOpacity>
    </View>
  );
}

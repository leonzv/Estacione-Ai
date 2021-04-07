import React from "react";
import { Text, View,TouchableOpacity} from "react-native";
import Style from "../style/style";

export default function Sobre(props) {
  const {goBack} = props.navigation;
  return (
    <View style={Style.containerDraw}>
      <View style={Style.headerEditar}>
        <Text style={Style.textGps}>Bem vindo, João!</Text>
      </View>
      <View style={{ backgroundColor: "black" }}>
        <Text style={Style.textSobreTop}>Sobre</Text>
      </View>
      <View style={Style.boxSobre}>
        <Text style={Style.userText}>Estacione Aí</Text>
      </View>
      <View style={Style.boxSobre}>
        <Text style={Style.userText}>Versão: 1.0</Text>
      </View>
      <View style={Style.boxSobre}>
        <Text style={Style.userText}>2021</Text>
      </View>
    <View style={{flex:1,justifyContent: 'flex-end'}}>
      <TouchableOpacity style={Style.voltarBoxCode}
       onPress={() => goBack()}>
          <Text style={Style.textVoltar}>V O L T A R</Text>
    </TouchableOpacity>
    </View>
    </View>
  );
}

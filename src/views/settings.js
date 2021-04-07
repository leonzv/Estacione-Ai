import React, { useState } from "react";
import { Text, View, Switch, TextInput, TouchableOpacity } from "react-native";
import Style from "../style/style";
import Slider from "@react-native-community/slider";

export default function Settings(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [codigo, setCodigo] = useState("");
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const {goBack} = props.navigation;
  return (
    <View style={Style.containerDraw}>
      <View style={Style.headerEditar}>
        <Text style={Style.textGps}>Bem vindo, João!</Text>
      </View>
      <View style={{ backgroundColor: "black" }}>
        <Text style={Style.textSettingsTop}>Configurações</Text>

        <View>
          <Text style={Style.textSettings}>Aumentar o tamanho da fonte:</Text>
          <Slider
            style={{
              width: "90%",
              height: 60,
              color: "#0087ff",
              marginLeft: 26,
              marginBottom: 20,
            }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#1065bd"
            maximumTrackTintColor="#1065bd"
            thumbTintColor="#0087ff"
          />
        </View>
        <View>
          <Text style={Style.textSettings}>Ativar notificações</Text>
          <Switch
            trackColor={{ false: "#999", true: "#1065bd" }}
            thumbColor={isEnabled ? "" : "#0087ff"}
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={Style.switchBtn}
          />
        </View>
        <Text style={Style.textSettings}>Adicionar código promocional</Text>
        <View style={Style.codeBox}>
          <Text style={Style.codeText}>I n s e r i r  c ó d i g o:</Text>
          <TextInput
            style={{ width: "83%", height: "100%", color: "#fff" }}
            onChangeText={(text) => setCodigo(text)}
            value={codigo}
            placeholderTextColor="#fff"
          />
        </View>
      </View>
        <View style={{flex: 1, justifyContent: 'flex-end',}}>
          <TouchableOpacity style={Style.voltarBoxCode}
          onPress={() => goBack()}>
            <Text style={Style.textVoltar}>V O L T A R</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

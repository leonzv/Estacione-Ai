import React, { useState } from "react";
import { Text, View, Switch } from "react-native";
import Style from "../style/style";

export default function Settings() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={Style.container}>
      <View style={Style.headerEditar}>
        <Text style={Style.textGps}>Bem vindo, João!</Text>
      </View>
      <View style={{ backgroundColor: "black" }}>
        <Text style={Style.textSettingsTop}>Configurações</Text>

        <View>
          <Text style={Style.textSettings}>Aumentar o tamanho da fonte:</Text>
        </View>
        <View>
          <Text style={Style.textSettings}>Ativar notificações</Text>
          <Switch
            trackColor={{ false: "#999", true: "#1065bd" }}
            thumbColor={isEnabled ? "" : "#0087ff"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <Text style={Style.textSettings}>Adicionar código promocional:</Text>
      </View>
    </View>
  );
}

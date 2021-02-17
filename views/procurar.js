import "react-native-gesture-handler";
import { View, Text, TouchableOpacity } from "react-native";
import Style from "../style/style";
import * as React from "react";
import Fake from './fakeload';
export default function LoadToHome(props) {
  return (
    <View style={{backgroundColor: '#fff',}}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={Style.circle}
          onPress={() => props.navigation.navigate("Chamar")} //mudar isso depois
        >
          <TouchableOpacity style={Style.circle2} />
        </TouchableOpacity>
      </View>
      <View>
        <View style={Style.blueCircle}>
          <View style={Style.redCircle}>
            <Text style={Style.circleText}> Buscando um motoboy...</Text>
          </View>
        </View>
      </View>
      <Fake></Fake>
      <View style={Style.procurarContainer}>
        <View style={Style.procurarBox}>
          <Text style={Style.procurarFont}> Endereço de partida: </Text>
          <View style={Style.whiteLineHorizontal} />
          <Text style={Style.procurarFont}> Endereço de entrega: </Text>
        </View>
        <View style={Style.procurarBox2}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={Style.circleProcurar}>
              <TouchableOpacity style={Style.circle2Procurar} />
            </TouchableOpacity>
            <Text style={Style.nameText}> Ruan Motoboy </Text>
            <View style={Style.whiteLineVertical} />
            <View style={{ flexDirection: "column" }}>
              <Text style={Style.horarioFont}>13:36</Text>
              <Text style={Style.horarioFont1}>Horário do Pedido</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={Style.horarioFont}>14:36</Text>
              <Text style={Style.horarioFont1}>Horario da Entrega</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

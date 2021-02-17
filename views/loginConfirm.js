import "react-native-gesture-handler";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Style from "../style/style";
import * as React from "react";
import react from "react";
import Swiper from "react-native-swiper";

export default function Cadastro(props) {
  const [usuario, setUsuario] = react.useState("");
  const [senha, setSenha] = react.useState("");
  return (
    <View style={Style.container}>
      <View>
        <Image
          style={Style.vaiVexImg}
          source={require("../img/vai-vex-logo.png")}
        />
      </View>
      <Swiper style={Style.wrapper} loop={false}>
        <View style={Style.retanguloAzul1}>
          <Text style={Style.loginText}>
            {" "}
            Um jeito simples e descomplicado de fazer entregas
          </Text>
          <Image
            style={Style.firstImg}
            source={require("../img/moto-branca.png")}
          />
        </View>
        <View style={Style.retanguloVermelho1}>
          <Text style={Style.loginText}>
            {" "}
            Uma simplicidade que cabe na sua mão
          </Text>
          <Image
            style={Style.firstImg}
            source={require("../img/dinheiro.png")}
          />
        </View>
      </Swiper>
      <View style={Style.textBox1}>
        <Text style={Style.textBoxFontCadastro}>Usuário:</Text>
        <TextInput
          style={Style.textBoxFont}
          onChangeText={(text) => setUsuario(text)}
          value={usuario}
          placeholderTextColor="#fff"
          autoCapitalize="words"
        />
      </View>
      <View style={Style.textBox2}>
        <Text style={Style.textBoxFontCadastro}>Senha:</Text>
        <TextInput
          style={Style.textBoxFont}
          onChangeText={(text) => setSenha(text)}
          value={senha}
          placeholderTextColor="#fff"
          autoCapitalize="words"
        />
        </View>
        <TouchableOpacity
          style={Style.btnCadastrar}
          onPress={() => props.navigation.navigate("Home")}
        >
          <Text style={Style.btnCadastrarFont}> Entrar </Text>
        </TouchableOpacity>
      
    </View>
  );
}

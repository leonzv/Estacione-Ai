import React from "react";
import "react-native-gesture-handler";
import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import Style from "../style/style.js";
import LinearGradient from "react-native-linear-gradient";
import Swiper from "react-native-swiper";
import HideWithKeyboard from 'react-native-hide-with-keyboard';

export default function LoginConfirm(props) {
  const [usuario, setUsuario] = react.useState("");
  const [senha, setSenha] = react.useState("");
  const signUp = async (email, senha) => {
    await app.emailPasswordAuth.registerUser(email, senha);
  };
  return (
    <View style={Style.container}>
      <HideWithKeyboard style={Style.topContainer}>
        <Image style={Style.car} source={require("../assets/img/carro.png")} />
        <Text
          style={{
            fontSize: 24,
            color: "#000",
            fontFamily: "Rubik-Bold",
          }}
        >
          Estacione Aí
        </Text>
      </HideWithKeyboard>
      <View style={Style.botContainer}>
        <LinearGradient
          colors={["#FF002B", "#FF5510"]}
          style={Style.linearGradient}
        >
          <Swiper
            style={Style.wrapper}
            loop={false}
            paginationStyle={{
              marginLeft: 30,
              height: "25%",
              justifyContent: "flex-start",
            }}
            activeDotColor="rgb(255,255,255)"
            dotColor="rgba(255,255,255,0.5)"
            dotStyle={{
              width: 30,
              height: 6,
              marginHorizontal: 10,
              alignSelf: "flex-start",
              top: 30,
            }}
            activeDotStyle={{
              width: 50,
              height: 6,
              marginHorizontal: 10,
              alignSelf: "flex-start",
              top: 30,
            }}
          >
            <View style={Style.swiperLogin}>
              <Text style={Style.swiperText}>
                {" "}
                Estacione seu carro ou moto de um jeito fácil e intuitivo
              </Text>
            </View>
            <View style={Style.swiperLogin}>
              <Text style={Style.swiperText}>
                {" "}
                Chame um carro de forma simples e escolha o valor que pode pagar
              </Text>
            </View>
          </Swiper>
        </LinearGradient>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={Style.boxLoginConfirm}>
          <Text style={Style.userText}>U s u á r i o:</Text>
          <TextInput
            style={{ width: "80%", height: "100%", color: "#fff" }}
            onChangeText={(text) => setUsuario(text)}
            value={usuario}
            placeholderTextColor="#fff"
            autoCapitalize="words"
          />
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={Style.boxLoginConfirm}>
          <Text style={Style.userText}>S e n h a:</Text>
          <TextInput
            style={{ width: "83%", height: "100%", color: "#fff" }}
            onChangeText={(text) => setSenha(text)}
            value={senha}
            secureTextEntry={true}
            placeholderTextColor="#fff"
            autoCapitalize="words"
          />
        </View>
      </View>
      <View style={Style.containerBoxLogin}>
        <TouchableOpacity
          style={Style.boxLeftLoginConfirm}
          onPress={() => props.navigation.navigate("Load")}
        >
          <Text style={Style.loginEntrarText}>E N T R A R</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style.boxRightLoginConfirm}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text style={Style.loginSocialText}>C A N C E L A R</Text>
        </TouchableOpacity>
      </View>
      <View style={Style.boxLoginCadastroConfirm}>
        <Text style={Style.boxLoginTextConfirm}>C A D A S T R A R</Text>
      </View>
      <View style={Style.containerBoxLogin}>
        <TouchableOpacity style={Style.boxLoginFacebook}>
          <Text style={Style.loginSocialText}>LOGIN COM FACEBOOK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.boxLoginGoogle}>
          <Text style={Style.loginSocialText}>LOGIN COM GOOGLE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

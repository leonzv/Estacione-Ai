import React from "react";
import "react-native-gesture-handler";
import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import Style from "../style/style.js";
import LinearGradient from "react-native-linear-gradient";
import Swiper from "react-native-swiper";
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import {CustomText} from "../components/CustomText";

export default function LoginConfirm({route, navigation}) {
  const [usuario, setUsuario] = React.useState();
  const [senha, setSenha] = React.useState();
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
          <CustomText fontType="body4" style={Style.userText}>U s u á r i o:</CustomText>
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
          <CustomText fontType="body4" style={Style.userText}>S e n h a:</CustomText>
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
          
          onPress={() => navigation.navigate('Load')}
        >
          <CustomText fontType="body4" style={Style.loginEntrarText}>E N T R A R</CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style.boxRightLoginConfirm}
          onPress={() => navigation.navigate("Login")}
        >
          <CustomText fontType="body4" style={Style.loginSocialText}>C A N C E L A R</CustomText>
        </TouchableOpacity>
      </View>
      <View style={Style.boxLoginCadastroConfirm}>
        <CustomText fontType="body3" style={Style.boxLoginTextConfirm}>C A D A S T R A R</CustomText>
      </View>
      <View style={Style.containerBoxLogin}>
        <TouchableOpacity style={Style.boxLoginFacebook}>
          <CustomText fontType="body4" style={Style.loginSocialText}>LOGIN COM FACEBOOK</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={Style.boxLoginGoogle}>
          <CustomText fontType="body4" style={Style.loginSocialText}>LOGIN COM GOOGLE</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

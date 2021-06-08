import React from "react";
import "react-native-gesture-handler";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Style from "../style/style.js";
import LinearGradient from "react-native-linear-gradient";
import Swiper from "react-native-swiper";
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import {CustomText} from "../components/CustomText";


export default function Login(props) {
  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
  
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
  
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }
  return (
    <View style={Style.container}>
      <View style={Style.topContainer}>
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
      </View>
      <View style={Style.botContainer}>
        <LinearGradient
          colors={["#FF002B", "#FF5510"]}
          style={Style.linearGradient}
        >
          <Swiper
            style={Style.wrapper}
            loop={false}
            paginationStyle={{marginLeft: 30, height: '25%', justifyContent: 'flex-start'}}
            activeDotColor="rgb(255,255,255)"
            dotColor="rgba(255,255,255,0.5)"
            dotStyle={{ width: 30, height: 6, marginHorizontal: 10, alignSelf: 'flex-start', top: 20 }}
            activeDotStyle={{ width: 50, height: 6, marginHorizontal: 10, alignSelf: 'flex-start', top: 20,}}
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
        
          <TouchableOpacity
            style={Style.boxLogin}
            onPress={() => props.navigation.navigate("LoginConfirm")}
          >
            <CustomText fontType="body3" style={Style.boxLoginText}>L O G I N</CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={Style.boxLogin}
            onPress={() => props.navigation.navigate("Cadastro")}
          >
            <CustomText fontType="body3" style={Style.boxLoginText}>C A D A S T R A R</CustomText>
          </TouchableOpacity>
        
        <View style={Style.containerBoxLogin}>
          <TouchableOpacity style={Style.boxLoginFacebook}
          onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}>
            <CustomText fontType="body4" style={Style.loginSocialText}>LOGIN COM FACEBOOK</CustomText>
          </TouchableOpacity>
          <TouchableOpacity style={Style.boxLoginGoogle}>
            <CustomText fontType="body4" style={Style.loginSocialText}>LOGIN COM GOOGLE</CustomText>
          </TouchableOpacity>
        </View>
    </View>
  );
}

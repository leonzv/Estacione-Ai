import React, { useState } from "react";
import "react-native-gesture-handler";
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import Style from "../style/style.js";
import HideWithKeyboard from "react-native-hide-with-keyboard";
import {CustomText} from "../components/CustomText";

export default function CadastroConfirm({route, navigation}) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [pais, setPais] = useState("");
  const [placa, setPlaca] = useState("");

  return (
    <KeyboardAvoidingView style={Style.container}>
      <HideWithKeyboard
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          minHeight: "0%",
          maxHeight: '15%',
          flexDirection: "row",
        }}
      >
        <Image style={Style.car} source={require("../assets/img/carro.png")} />
        <Text style={{ fontSize: 24, fontFamily: "Rubik-Bold", color: "#000" }}>
          Estacione Aí
        </Text>
      </HideWithKeyboard>
      <View style={{ flex: 1 }}>
        <View style={Style.boxLoginConfirmCadastro}>
          <CustomText style={Style.userText}>N o m e:</CustomText>
          <TextInput
            style={{ width: "80%", height: "100%", color: "#fff" }}
            onChangeText={(text) => setNome(text)}
            value={nome}
            placeholderTextColor="#fff"
          />
        </View>
        <View style={Style.boxLoginConfirmCadastro}>
          <CustomText fontType="body4" style={Style.userText}>C P F:</CustomText>
          <TextInput
            style={{ width: "83%", height: "100%", color: "#fff" }}
            onChangeText={(text) => setCpf(text)}
            value={cpf}
            placeholderTextColor="#fff"
          />
        </View>
        <View style={Style.boxLoginConfirmCadastro}>
          <CustomText fontType="body4" style={Style.userText}>R G:</CustomText>
          <TextInput
            style={{ width: "83%", height: "100%", color: "#fff" }}
            onChangeText={(text) => setRg(text)}
            value={rg}
            placeholderTextColor="#fff"
          />
        </View>
        <View style={Style.boxLoginConfirmCadastro}>
          <CustomText fontType="body4" style={Style.userText}>C i d a d e:</CustomText>
          <TextInput
            style={{ width: "83%", height: "100%", color: "#fff" }}
            onChangeText={(text) => setCidade(text)}
            value={cidade}
            placeholderTextColor="#fff"
          />
        </View>
        <View style={Style.boxLoginConfirmCadastro}>
          <CustomText fontType="body4" style={Style.userText}>E s t a d o:</CustomText>
          <TextInput
            style={{ width: "83%", height: "100%", color: "#fff" }}
            onChangeText={(text) => setEstado(text)}
            value={estado}
            placeholderTextColor="#fff"
          />
        </View>
        <View style={Style.boxLoginConfirmCadastro}>
          <CustomText fontType="body4" style={Style.userText}>P a í s:</CustomText>
          <TextInput
            style={{ width: "83%", height: "100%", color: "#fff" }}
            onChangeText={(text) => setPais(text)}
            value={pais}
            placeholderTextColor="#fff"
          />
        </View>
        <View style={Style.boxLoginConfirmCadastro}>
          <CustomText fontType="body4" style={Style.userText}>P l a c a:</CustomText>
          <TextInput
            style={{ width: "83%", height: "100%", color: "#fff" }}
            onChangeText={(text) => setPlaca(text)}
            value={placa}
            placeholderTextColor="#fff"
          />
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={Style.carOption}>
              <Image
                style={Style.carBmw}
                source={require("../assets/img/carrobmw.png")}
              />
              <Text style={Style.textCar}>Bmw Série 3 2020</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.carOption}>
              <Image
                style={Style.carBmw}
                source={require("../assets/img/carrobmw.png")}
              />
              <Text style={Style.textCar}>Bmw Série 3 2020</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.carOption}>
              <Image
                style={Style.carBmw}
                source={require("../assets/img/carrobmw.png")}
              />
              <Text style={Style.textCar}>Bmw Série 3 2020</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={Style.carOption}>
              <Image
                style={Style.carBmw}
                source={require("../assets/img/carrobmw.png")}
              />
              <Text style={Style.textCar}>Bmw Série 3 2020</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.carOption}>
              <Image
                style={Style.carBmw}
                source={require("../assets/img/carrobmw.png")}
              />
              <Text style={Style.textCar}>Bmw Série 3 2020</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.carOption}>
              <Image
                style={Style.carBmw}
                source={require("../assets/img/carrobmw.png")}
              />
              <Text style={Style.textCar}>Bmw Série 3 2020</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={Style.containerBoxLogin}>
        <TouchableOpacity
          style={Style.boxLeftLoginConfirm}
          onPress={() => navigation.navigate("InserirFoto")}
        >
          <CustomText fontType="body4" style={Style.loginEntrarText}>A V A N Ç A R</CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style.boxRightLoginConfirm}
          onPress={() => navigation.navigate("Login")}
        >
          <CustomText fontType="body4" style={Style.loginSocialText}>C A N C E L A R</CustomText>
        </TouchableOpacity>
      </View>
      <HideWithKeyboard style={Style.containerBoxLogin}>
        <TouchableOpacity style={Style.boxLoginFacebook}>
          <CustomText fontType="body4" style={Style.loginSocialText}>LOGIN COM FACEBOOK</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={Style.boxLoginGoogle}>
          <CustomText fontType="body4" style={Style.loginSocialText}>LOGIN COM GOOGLE</CustomText>
        </TouchableOpacity>
      </HideWithKeyboard>
    </KeyboardAvoidingView>
  );
}

import "react-native-gesture-handler";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Style from "../style/style";
import * as React from "react";
import react from "react";

export default function Chamar(props) {
  const [endereco, setEndereco] = react.useState("");
  const [mercadoria, setMercadoria] = react.useState("");
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={Style.circle}>
          <TouchableOpacity
            style={Style.circle2}
            title="Toggle drawer"
            onPress={() => navigation.toggleDrawer()}
          />
        </TouchableOpacity>
        <Text style={Style.textCircle}>Bem vindo, Emerson!</Text>
        <Image
          style={{
            alignSelf: "flex-end",
            resizeMode: "contain",
            width: 80,
            marginRight: 18.5,
            bottom: 20,
          }}
          source={require("../img/vai-vex-logo.png")}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 24,
            textAlign: "left",
            marginLeft: 25,
            marginVertical: 15,
          }}
        >
          {" "}
          Chamar um motoboy{" "}
        </Text>
        <View style={Style.textBoxChamar}>
          <Text style={Style.textBoxFontCadastro}>Endereço de entrega:</Text>
          <TextInput
            style={Style.textBoxFont}
            onChangeText={(text) => setEndereco(text)}
            value={endereco}
            placeholderTextColor="#fff"
            autoCapitalize="words"
          />
        </View>
        <View style={Style.textBoxChamar}>
          <Text style={Style.textBoxFontCadastro}>Tipo de mercadoria:</Text>
          <TextInput
            style={Style.textBoxFont}
            onChangeText={(text) => setMercadoria(text)}
            value={mercadoria}
            placeholderTextColor="#fff"
            autoCapitalize="words"
          />
        </View>
        <View style={Style.blackLineHorizontal} />
        <View style={Style.textBoxGuardar}>
          <Text style={Style.textBoxFontCadastro}>{endereco}</Text>
        </View>
        <View style={Style.textBoxGuardar}>
          <Text style={Style.textBoxFontCadastro}>{mercadoria}</Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white", flexDirection: "row" }}>
        <TouchableOpacity style={Style.blueBtn}>
          <Text style={Style.btnAdminFont}> Gravar Endereço </Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.blueBtn}>
          <Text style={Style.btnAdminFont}>Agendar Entrega</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={Style.greenBtn}>
        <Text style={Style.motoboyText}>Chamar Motoboy</Text>
      </TouchableOpacity>
    </View>
  );
}

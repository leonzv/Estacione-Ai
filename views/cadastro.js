import "react-native-gesture-handler";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Style from "../style/style";
import * as React from "react";
import react from "react";

export default function Cadastro(props) {
  const [nome, setNome] = react.useState("");
  const [sobrenome, setSobrenome] = react.useState("");
  const [cpfcnpj, setCpfcnpj] = react.useState("");
  const [endereco, setEndereco] = react.useState("");
  const [numero, setNumero] = react.useState("");
  const [bairro, setBairro] = react.useState("");
  const [uf, setUf] = react.useState("");
  const [cidade, setCidade] = react.useState("");
  const [pais, setPais] = react.useState("");
  const [cep, setCep] = react.useState("");
  return (
    <View style={Style.container}>
      <View>
        <Image
          style={Style.vaiVexImg}
          source={require("../img/vai-vex-logo.png")}
        />
        <Text
          style={{
            marginLeft: 30,
            marginTop: 20,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Preencha o forumário completo:
        </Text>
      </View>
      <View style={Style.textBox}>
        <Text style={Style.textBoxFontCadastro}>Nome:</Text>
        <TextInput
          style={Style.textBoxFont}
          onChangeText={(text) => setNome(text)}
          value={nome}
          placeholderTextColor="#fff"
          autoCapitalize="words"
        />
      </View>
      <View style={Style.textBox}>
        <Text style={Style.textBoxFontCadastro}>Sobrenome:</Text>
        <TextInput
          style={Style.textBoxFont}
          onChangeText={(text) => setSobrenome(text)}
          value={sobrenome}
          placeholderTextColor="#fff"
          autoCapitalize="words"
        />
      </View>
      <View style={Style.textBox}>
        <Text style={Style.textBoxFontCadastro}>CPF/CNPJ:</Text>
        <TextInput
          style={Style.textBoxFont}
          onChangeText={(text) => setCpfcnpj(text)}
          value={cpfcnpj}
          placeholderTextColor="#fff"
          autoCapitalize="words"
        />
      </View>
      <View style={Style.textBox}>
        <Text style={Style.textBoxFontCadastro}>Endereço:</Text>
        <TextInput
          style={Style.textBoxFont}
          onChangeText={(text) => setEndereco(text)}
          value={endereco}
          placeholderTextColor="#fff"
          autoCapitalize="words"
        />
      </View>
      <View style={Style.box3070}>
        <View style={Style.textBox30}>
          <Text style={Style.textBoxFontCadastro}>Nº:</Text>
          <TextInput
            style={Style.textBoxFont}
            onChangeText={(text) => setNumero(text)}
            value={numero}
            placeholderTextColor="#fff"
            autoCapitalize="words"
          />
        </View>
        <View style={Style.textBox70}>
          <Text style={Style.textBoxFontCadastro}>Bairro:</Text>
          <TextInput
            style={Style.textBoxFont}
            onChangeText={(text) => setBairro(text)}
            value={bairro}
            placeholderTextColor="#fff"
            autoCapitalize="words"
          />
        </View>
      </View>
      <View style={Style.box3070}>
        <View style={Style.textBox30}>
          <Text style={Style.textBoxFontCadastro}>UF:</Text>
          <TextInput
            style={Style.textBoxFont}
            onChangeText={(text) => setUf(text)}
            value={uf}
            placeholderTextColor="#fff"
            autoCapitalize="words"
          />
        </View>
        <View style={Style.textBox70}>
          <Text style={Style.textBoxFontCadastro}>Cidade:</Text>
          <TextInput
            style={Style.textBoxFont}
            onChangeText={(text) => setCidade(text)}
            value={cidade}
            placeholderTextColor="#fff"
            autoCapitalize="words"
          />
        </View>
      </View>
      <View style={Style.textBox}>
        <Text style={Style.textBoxFontCadastro}>País:</Text>
        <TextInput
          style={Style.textBoxFont}
          onChangeText={(text) => setPais(text)}
          value={pais}
          placeholderTextColor="#fff"
          autoCapitalize="words"
        />
      </View>
      <View style={Style.textBox}>
        <Text style={Style.textBoxFontCadastro}>CEP:</Text>
        <TextInput
          style={Style.textBoxFont}
          onChangeText={(text) => setCep(text)}
          value={cep}
          placeholderTextColor="#fff"
          autoCapitalize="words"
        />
      </View>
      <TouchableOpacity
        style={Style.btnComecar}
        onPress={() => props.navigation.navigate("LoadHome")}
      >
        <Text style={Style.btnComecarFont}> Começar </Text>
      </TouchableOpacity>
    </View>
  );
}

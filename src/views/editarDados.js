import React, { useState } from "react";
import "react-native-gesture-handler";
import {
  Alert,
  Modal,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Text,
} from "react-native";
import Style from "../style/style.js";

export default function EditarDados( {navigate}, props) {
  const [nome, setNome] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [rg, setRg] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [estado, setEstado] = React.useState("");
  const [pais, setPais] = React.useState("");
  const [modelo, setModelo] = React.useState("");
  const [placa, setPlaca] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [senhaConfirm, setSenhaConfirm] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View style={Style.container}>
      <View style={Style.headerEditar}>
        <Text style={Style.textGps}>Bem vindo, João!</Text>
      </View>
      <View style={Style.editarDados}>
        <Text style={{ fontSize: 26, color: "white", marginLeft: 15, fontFamily: "Renogare", }}>
          {" "}
          Editar Dados{" "}
        </Text>
      </View>
      <View style={Style.boxLoginConfirm}>
        <Text style={Style.userText}>N o m e:</Text>
        <TextInput
          style={{ width: "80%", height: "100%", color: "#fff" }}
          onChangeText={(text) => setNome(text)}
          value={nome}
          placeholderTextColor="#fff"
        />
      </View>
      <View style={Style.boxLoginConfirm}>
        <Text style={Style.userText}>C P F:</Text>
        <TextInput
          style={{ width: "83%", height: "100%", color: "#fff" }}
          onChangeText={(text) => setCpf(text)}
          value={cpf}
          placeholderTextColor="#fff"
        />
      </View>
      <View style={Style.boxLoginConfirm}>
        <Text style={Style.userText}>R G:</Text>
        <TextInput
          style={{ width: "83%", height: "100%", color: "#fff" }}
          onChangeText={(text) => setRg(text)}
          value={rg}
          placeholderTextColor="#fff"
        />
      </View>
      <View style={Style.boxLoginConfirm}>
        <Text style={Style.userText}>C i d a d e:</Text>
        <TextInput
          style={{ width: "83%", height: "100%", color: "#fff" }}
          onChangeText={(text) => setCidade(text)}
          value={cidade}
          placeholderTextColor="#fff"
        />
      </View>
      <View style={Style.boxLoginConfirm}>
        <Text style={Style.userText}>E s t a d o:</Text>
        <TextInput
          style={{ width: "83%", height: "100%", color: "#fff" }}
          onChangeText={(text) => setEstado(text)}
          value={estado}
          placeholderTextColor="#fff"
        />
      </View>
      <View style={Style.boxLoginConfirm}>
        <Text style={Style.userText}>P a í s:</Text>
        <TextInput
          style={{ width: "83%", height: "100%", color: "#fff" }}
          onChangeText={(text) => setPais(text)}
          value={pais}
          placeholderTextColor="#fff"
        />
      </View>
      <View style={Style.boxLoginConfirm}>
        <Text style={Style.userText}>P l a c a:</Text>
        <TextInput
          style={{ width: "83%", height: "100%", color: "#fff" }}
          onChangeText={(text) => setPlaca(text)}
          value={placa}
          placeholderTextColor="#fff"
        />
      </View>
      <View style={Style.carModal}>
        <Image style={Style.carBmw1} source={require("../assets/img/carrobmw.png")} />
        <Text style={Style.textCar1}>Bmw Série 3 2020</Text>
        <TouchableOpacity
          style={[Style.button, Style.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Image
            style={{
              width: 35,
              height: 35,
              alignSelf: "center",
              resizeMode: 'contain',
            }}
            source={require("../assets/img/note.png")}
          /> 
        </TouchableOpacity>
      </View>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={Style.centeredView}>
          <View style={Style.modalView}>
            <Text style={Style.topModalText}>Modelo do carro</Text>
            <Image
              style={Style.carBmwModal}
              source={require("../assets/img/carrobmw.png")}
            />
            <Text style={Style.botModalText}>Bmw Série 3 2020</Text>
            <View style={Style.editarDadosTextBox}>
              <Text style={Style.userText}>A t u a l i z a r  M o d e l o:</Text>
              <TextInput
                style={{ width: "83%", height: "100%", color: "#fff" }}
                onChangeText={(text) => setModelo(text)}
                value={modelo}
                placeholderTextColor="#fff"
              />
            </View>
            <TouchableOpacity style={Style.modalBox}>
              <Text style={Style.loginEntrarText}>A T U A L I Z A R</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={Style.boxLoginConfirm}>
        <Text style={Style.userText}>A t u a l i z a r  s e n h a:</Text>
        <TextInput
          style={{ width: "83%", height: "100%", color: "#fff" }}
          onChangeText={(text) => setSenha(text)}
          value={senha}
          placeholderTextColor="#fff"
        />
      </View>
      <View style={Style.boxLoginConfirm}>
        <Text style={Style.userText}>C o n f i r m a r  n o v a  s e n h a:</Text>
        <TextInput
          style={{ width: "83%", height: "100%", color: "#fff" }}
          onChangeText={(text) => setSenhaConfirm(text)}
          value={senhaConfirm}
          placeholderTextColor="#fff"
        />
      </View>
      <View style={Style.containerBoxLogin}>
        <TouchableOpacity
          style={Style.boxLeftLoginConfirm}
          onPress={() => props.navigation.navigate("Load")}
        >
          <Text style={Style.loginEntrarText}>A T U A L I Z A R</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style.deletarBox}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text style={Style.loginSocialText}>D E L E T A R</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={Style.voltarBox}>
        <Text style={Style.textVoltar}>V O L T A R</Text>
      </TouchableOpacity>
    </View>
  );
}

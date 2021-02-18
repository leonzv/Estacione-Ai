import React, { useState } from "react";
import { Text, View, Modal, TouchableOpacity, Alert } from "react-native";
import Style from "../style/style";

export default function Favoritos() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={Style.container}>
      <View style={Style.headerEditar}>
        <Text style={Style.textGps}>Bem vindo, João!</Text>
      </View>
      <View style={{ backgroundColor: "black" }}>
        <Text style={Style.textSettingsTop}>Favoritos</Text>
        <Text style={Style.textFavoritosTop}>
          Aqui estão seus estacionamentos salvos
        </Text>
        <View style={Style.boxLoginConfirm}>
          <Text style={Style.userText}>A t u a l i z a r M o d e l o</Text>
        </View>
        <View style={Style.boxLoginConfirm}>
          <Text style={Style.userText}>A t u a l i z a r M o d e l o</Text>
          <View style={Style.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={Style.centeredView}>
                <View
                  style={{ flex: 1, backgroundColor: "black", opacity: 0.5 }}
                />
                <View style={Style.modalView}>
                  <Text style={Style.topModalText}>Modelo do carro</Text>
                  <Text style={Style.botModalText}>Bmw Série 3 2020</Text>
                  <View style={Style.boxLoginConfirm}>
                    <Text style={Style.userText}>
                      A t u a l i z a r M o d e l o:
                    </Text>
                  </View>
                  <TouchableOpacity style={Style.modalBox}>
                    <Text style={Style.loginEntrarText}>A T U A L I Z A R</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <TouchableOpacity
              style={[Style.button, Style.buttonOpen]}
              onPress={() => setModalVisible(true)}
            >
              <Text style={Style.textStyle}></Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Style.boxLoginConfirm}>
          <Text style={Style.userText}>A t u a l i z a r M o d e l o:</Text>
        </View>
      </View>
    </View>
  );
}

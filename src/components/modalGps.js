import React, { useState } from "react";
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import Style from "../style/style";
import Swiper from "react-native-swiper";

export default function modalGps() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <View>
        <TouchableOpacity
          style={[Style.gpsBtnAzul, Style.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={Style.textBtnGps}>15</Text>
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
        <View style={Style.centeredViewFav}>
          <View style={Style.modalViewFav}>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View style={{ width: "50%", height: "100%" }}>
                <Text style={Style.textModalGps}> Serviços: </Text>
                <Text style={Style.textModalGps}> -Estacionamento </Text>
                <Text style={Style.textModalGps}> -Lava Rápido </Text>
              </View>
              <View
                style={{
                  height: "141%",
                  width: 1,
                  top: 50,
                  backgroundColor: "#333",
                  alignSelf: "center",
                }}
              />
              <View style={{ width: "50%", height: "100%" }}>
                <Text style={Style.textModalGps}> Preços: </Text>
                <Swiper
                  style={Style.wrapper}
                  loop={false}
                  paginationStyle={{right: 80}}
                  activeDotColor="rgb(255,255,255)"
                  dotColor="rgba(255,255,255,0.5)"
                  dotStyle={{ width: 30, height: 6, marginHorizontal: 10 }}
                  activeDotStyle={{
                    width: 50,
                    height: 6,
                    marginHorizontal: 10,
                  }}
                >
                  <View style={Style.swiperGps}>
                    <Text style={Style.swiperGpsText}>R$ 20,00</Text>
                    <Text style={Style.textModalGps1}>Por apenas 1 hora</Text>
                  </View>
                  <View style={Style.swiperGps}>
                    <Text style={Style.swiperGpsText}>R$ 40,00</Text>
                    <Text style={Style.textModalGps1}>Por apenas 2 horas</Text>
                  </View>
                </Swiper>
                <View style={Style.viewGpsModal}>
                <Text style={Style.textModal}>Favoritar</Text>
                <Image style={{resizeMode: 'contain', width: 50, marginRight: 30,}} source={require("../assets/img/estrela.png")} />
                </View>
              </View>
            </View>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <TouchableOpacity style={Style.btnReservar}>
                <Text style={Style.textReservarMap}>
                  {" "}
                  R E S E R V A R   V A G A{" "}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.btnReservar}
              onPress={() => setModalVisible(false)}>
                <Text style={Style.textReservar}> F E C H A R </Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.btnCancelar}>
                <Text style={Style.textCancelar}>S A I R   D O   A P P </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

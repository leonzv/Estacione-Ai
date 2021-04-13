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
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function modalGps() {
  function switchModal() {
    if (modalVisible == true) {
      setModalVisible(!modalVisible);
      setModalVisible1(!modalVisible1);
    }
  }
  function switchModal1() {
    if (modalVisible1 == true) {
      setModalVisible1(!modalVisible1);
      setModalVisible2(!modalVisible2);
    }
  }
  if(check1 && check == true){
    alert("Apenas um pode ser selecionado")
  }
  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
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
      <View>
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
              <TouchableOpacity style={Style.btnReservar}
              onPress={() => switchModal()}>
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
      {/*fim do primeiro modal*/}
      <View>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible1}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible1);
        }}
      >
        <View style={Style.centeredViewFav}>
          <View style={Style.modalViewFav}>
            
              <Text style={Style.topModalTextGps}>Você escolheu:</Text>
              <Text style={Style.topModalTextGps1}>Star Park</Text>
           
            <View style={{alignItems: 'center'}}>
              <Text style={Style.modalFavoritoText}> Endereço: </Text>
              <Text style={Style.modalFavoritoSmallText}>
                {" "}
                Avenida São João, 1460
              </Text>
              <Text style={Style.modalFavoritoSmallText}> São Paulo, SP</Text>
              <Text style={Style.modalFavoritoText}>
                {" "}
                Formas de pagamento:{" "}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'center' }}>
              <BouncyCheckbox
                size={28}
                fillColor="#0087ff"
                unfillColor="black"
                iconStyle={{
                  borderColor: "white",
                  borderWidth: 5,
                  marginLeft: 30,
                  marginTop: 20,
                  marginBottom: 35,
                }}
                onPress={(newValue) => setCheck(newValue)}
              />
              <Text style={Style.checkTextLeft}>Dinheiro</Text>
              <BouncyCheckbox
                size={28}
                fillColor="#0087ff"
                unfillColor="black"
                iconStyle={{
                  borderColor: "white",
                  borderWidth: 5,
                  marginLeft: 30,
                  marginTop: 20,
                  marginBottom: 35,
                }}
                onPress={(newValue) => setCheck1(newValue)}
              />
              <Text style={Style.checkTextRight}>
                Cartão de crédito ou débito
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'center' }}>
              <BouncyCheckbox
                size={22}
                fillColor="#0087ff"
                unfillColor="white"
                iconStyle={{
                  borderColor: "white",
                  borderWidth: 5,
                  marginLeft: 30,
                  marginTop: 20,
                  marginBottom: 35,
                  borderRadius: 0,
                }}
                onPress={(newValue) => setCheck2(newValue)}
              />
              <Text style={Style.checkTextBottom}>
                Repetir o mesmo processo nas próximos vezes
              </Text>
            </View>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <TouchableOpacity style={Style.btnReservar}
              onPress={() => switchModal1()}>
                <Text style={Style.textReservar}> R E S E R V A R   V A G A  </Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.btnCancelar}
              onPress={() => setModalVisible1(false)}>
                <Text style={Style.textCancelar}> C A N C E L A R </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      </View>
      {/*fim do segundo modal*/}
      <View>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible2);
        }}
      >
        <View style={Style.centeredViewFav}>
          <View style={Style.modalViewFav}>           
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1,}}>
              <Text style={Style.modalParabens}>Parabéns!</Text>           
              <Image
                    style={{
                      width: 120,
                      height: 120,
                      alignSelf: "center",
                      resizeMode: "contain",
                      marginTop: 40,
                    }}
                    source={require("../assets/img/btnVerde.png")}
                  />                      
              <Text style={Style.modalVaga}>Você reservou sua vaga.</Text>
            </View>
            <View style={{ justifyContent: "flex-end" }}>
              <TouchableOpacity style={Style.btnCancelar}
              onPress={() => setModalVisible2(false)}>
                <Text style={Style.textCancelar}> F E C H A R </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      </View>
    </View>
  );
}

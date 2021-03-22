import React, { useState } from "react";
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  Alert,
  Image,
  TextInput,
} from "react-native";
import Style from "../style/style";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import style from "../style/style";

export default function modal() {
  const [check, setCheck] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modelo, setModelo] = useState("");
  return (
    <View>
      <View>
        <TouchableOpacity
          style={[Style.buttonFav, Style.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Image
            style={{
              width: 25,
              height: 25,
              alignSelf: "center",
              resizeMode: "contain",
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
        <View style={Style.centeredViewFav}>
          <View style={Style.modalViewFav}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={Style.topModalTextFav}>Joia Park</Text>
              <View
                style={{
                  flex: 0,
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#ff0000",
                    borderRadius: 40,
                    width: 38,
                    height: 38,
                    marginRight: 30,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                      alignSelf: "center",
                      resizeMode: "contain",
                      bottom: 1,
                    }}
                    source={require("../assets/img/lixeira.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View>
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
            <View style={{ flexDirection: "row", alignItems: "center" }}>
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
                onPress={(isChecked: check) => {}}
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
                onPress={(isChecked: check) => {}}
              />
              <Text style={Style.checkTextRight}>
                Cartão de crédito ou débito
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
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
                onPress={(isChecked: check) => {}}
              />
              <Text style={Style.checkTextBottom}>
                Repetir o mesmo processo nas próximos vezes
              </Text>
            </View>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <TouchableOpacity style={Style.btnReservar}>
                <Text style={Style.textReservar}> R E S E R V A R   V A G A  </Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.btnCancelar}>
                <Text style={Style.textCancelar}> C A N C E L A R </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

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

export default function modal() {
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
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#ff0000",
                    borderRadius: 40,
                    width: 30,
                    height: 30,
                    marginRight: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
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
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

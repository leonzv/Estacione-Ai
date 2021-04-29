import React, { useState } from "react";
import "react-native-gesture-handler";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Style from "../style/style.js";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { PermissionsAndroid } from 'react-native';

export default function InserirFoto(props) {
  const [filePath, setFilePath] = useState({});

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
      videoQuality: 'high',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        setFilePath(response);
      });
    }
  };

  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response);
    });
  };

  return (
    <View style={Style.blackgroundFoto}>
      <Text style={Style.textFotoTop}>Inserir foto</Text>
      <Text style={Style.textFoto}>Escolha uma foto de sua preferência</Text>
      <View style={Style.cameraBox}>
         {/* <Image
          source={{
            uri: 'data:image/jpeg;base64,' + filePath.data,
          }}
          style={styles.imageStyle}
        /> */}
        <Image
          source={{uri: filePath.uri}}
          style={Style.imageStyle}
        />
        <Text style={Style.textStyleCam}>{filePath.uri}</Text>
      </View>
      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-end",
          alignSelf: "flex-end",
          flex: 1,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity style={Style.tirarFotoBox} onPress={() => captureImage('photo')}>
          <Text style={Style.boxUp}>T I R A R F O T O</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.buscarBox} onPress={() => chooseFile('photo')}>
          <Text style={Style.boxUp}>B U S C A R</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={Style.concluirBox}>
        <Text
          style={Style.concluirText}
          onPress={() => props.navigation.navigate("LocationEnable")}
        >
          {" "}
          C O N C L U I R{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

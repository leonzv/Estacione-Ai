import React, {useRef, useState, useEffect} from "react";
import "react-native-gesture-handler";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import Style from "../style/style.js";

// setInterval custom hook by Dan Abramov
function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

export default function Load(props) {
    let animation = useRef(new Animated.Value(0));
  const [progress, setProgress] = useState(0);
  useInterval(() => {
    // update progress until 100
    if (progress < 100) {
      setProgress(progress + 25);
    }
  }, 1000);

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 100,
    }).start();
  }, [progress]);

  if(progress === 100){
    props.navigation.navigate('Gps')
  }
  return (
    <View style={Style.blackground}>
      <Text style={Style.buscarBigText}>Buscando vaga...</Text>
      <View style={Style.primeiraRoda}>
        <View style={Style.segundaRoda} />
        <View style={Style.terceiraRoda}>
          <Text style={Style.loadText}>{`${progress}`}%</Text>
        </View>
      </View>

      <TouchableOpacity
        style={Style.localActive}
        onPress={() => props.navigation.navigate("Login")}
      >
        <Text style={Style.localActiveText}>CANCELAR</Text>
      </TouchableOpacity>
    </View>
  );
}

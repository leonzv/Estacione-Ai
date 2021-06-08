import React, { createContext, useState } from "react";
import {FONTS} from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const FontContext = createContext({});

export function FontProvider({ children }) {
  const [fonts, setFonts] = useState(FONTS);
  
  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify(fonts)
      await AsyncStorage.setItem('@01', jsonValue)
    } catch (e) {
      // erro salvando valor
    }
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@01')
      return jsonValue != null ? JSON.parse(value) : null;
    } catch(e) {
      // erro lendo valor
    }
  }
console.log(getData('@01'));
console.log(storeData('@01'));
    const onChangeFonts = (newValues) => {
      setFonts(newValues);
    }
  
    return (
      <FontContext.Provider value={{ FONTS: { ...fonts }, onChangeFonts }}>
        { children}
      </FontContext.Provider>
    )
  }
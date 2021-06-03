import React, { createContext, useState } from "react";
import {FONTS} from "../constants";
export const FontContext = createContext({});

export function FontProvider({ children }) {
    const [fonts, setFonts] = useState(FONTS);
  
    const onChangeFonts = (newValues) => {
      setFonts(newValues);
    }
  
    return (
      <FontContext.Provider value={{ FONTS: { ...fonts }, onChangeFonts }}>
        { children}
      </FontContext.Provider>
    )
  }
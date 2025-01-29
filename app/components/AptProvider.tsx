"use client";
import { useState } from "react";
import { AptContext } from "../utils/createContext";

const AptProvider = ({ children }: { children: React.ReactNode }) => {
  const [visu, setVisu] = useState<number>(1002);
  const value = { visu, setVisu };
  return <AptContext.Provider value={value}>{children}</AptContext.Provider>;
};

export default AptProvider;

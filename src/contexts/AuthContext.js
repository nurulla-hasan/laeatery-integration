

"use client";
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isChatted, setIsChatted] = useState(false);

  return (
    <AuthContext.Provider value={{ isChatted, setIsChatted }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useChatContext = () => useContext(AuthContext);
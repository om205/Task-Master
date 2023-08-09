import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  if (!user)
    localStorage.getItem("user") &&
      setUser(JSON.parse(localStorage.getItem("user")));
  if (!token)
    localStorage.getItem("token") && setToken(localStorage.getItem("token"));

  const updateUser = (newUser) => {
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const updateToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider
      value={{ user, token, updateUser, updateToken, logout }}
    >
      {children}
    </UserContext.Provider>
  );
}

import { useState } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "./AuthContext";

import type { User } from "../types/user";

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);
  const [error, setError] = useState("");

  const login = (data: User) => {
    // const users = {
    //   users: {
    //     " ankit@gmail.com": {
    //       id: 1,
    //       password: "Ankit@123",
    //     },
    //     "john@gmail.com": {
    //       id: 2,
    //       password: "John@123",
    //     },
    //   },
    // };

    const admin = JSON.parse(localStorage.getItem("admin")!);
    const users = JSON.parse(localStorage.getItem("users") ?? "{}");

    if (admin.email === data.email) {
      if (admin.password === data.password) {
        setIsAdmin(true);
        return;
      } else {
        setError("Please check you credentilas");
        return;
      }
    }

    if (users[data.email]) {
      if (users[data.email].password === data.password) {
        setIsLogIn(true);
        return;
      } else {
        setError("Please check your credentials");
        return;
      }
    }
    setError("Please Register");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAdmin, error, isLogIn, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

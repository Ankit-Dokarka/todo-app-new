import { createContext } from "react";
import type { User } from "../types/user";

type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isAdmin: boolean;
  error: string;
  isLogIn: boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);

import { useContext } from "react";
import { AuthContext } from "./context";
import { AuthContextProps } from "./types";

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth должен использоваться внутри AuthProvider");
  }
  return context;
};

import { ReactNode } from "react";
import { theme } from "../styles/theme";

import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./Auth";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <AuthProvider>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </AuthProvider>
);

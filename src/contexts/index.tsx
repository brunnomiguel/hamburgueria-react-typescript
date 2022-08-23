import { ReactNode } from "react";
import { theme } from "../styles/theme";

import { AuthProvider } from "./Auth";
import { ProductProvider } from "./Products";
import { ChakraProvider } from "@chakra-ui/react";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <AuthProvider>
    <ProductProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </ProductProvider>
  </AuthProvider>
);

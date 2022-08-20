import { ReactNode } from "react";
import { theme } from "../styles/theme";

import { ChakraProvider } from "@chakra-ui/react";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

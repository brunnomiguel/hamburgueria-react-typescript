import { Center, Flex } from "@chakra-ui/react";

import { theme } from "../../styles/theme";

import { FiLogOut } from "react-icons/fi";
import { FaCartPlus, FaSearch } from "react-icons/fa";

import { Input } from "../Form/Input";
import { useAuth } from "../../contexts/Auth";

export const Search = () => {
  const { signOut } = useAuth();

  

  return (
    <Flex maxW="500px" w="100%" alignItems="center">
      <Input placeholder="Pesquise o que deseja" icon={FaSearch} />
      <Center ml="4" cursor="pointer">
        <FaCartPlus
          size={theme.fontSizes["2xl"]}
          color={theme.colors.grey[400]}
        />
      </Center>
      <Center ml="4" onClick={() => signOut()} cursor="pointer">
        <FiLogOut
          size={theme.fontSizes["2xl"]}
          color={theme.colors.grey[400]}
        />
      </Center>
    </Flex>
  );
};

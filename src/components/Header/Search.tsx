import { Center, Flex } from "@chakra-ui/react";

import { theme } from "../../styles/theme";

import { FiLogOut } from "react-icons/fi";
import { FaCartPlus, FaSearch } from "react-icons/fa";

import { Input } from "../Form/Input";

export const Search = () => {
  return (
    <Flex maxW="500px" w="100%" alignItems="center">
      <Input placeholder="Pesquise o que deseja" icon={FaSearch} />
      <Center ml="4">
        <FaCartPlus
          size={theme.fontSizes["2xl"]}
          color={theme.colors.grey[400]}
        />
      </Center>
      <Center ml="4">
        <FiLogOut
          size={theme.fontSizes["2xl"]}
          color={theme.colors.grey[400]}
        />
      </Center>
    </Flex>
  );
};

import { Flex, Heading, Text } from "@chakra-ui/react";
import { Search } from "./Search";

export const Header = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      bg="grey.50"
      h="80px"
      paddingX="8"
    >
      <Heading
        display="flex"
        alignItems="baseline"
        fontSize="3xl"
        as="h1"
        color="grey.600"
      >
        Burguer
        <Text color="secondary.600" ml="2" fontSize="xl">
          Kenzie
        </Text>
      </Heading>
      <Search />
    </Flex>
  );
};

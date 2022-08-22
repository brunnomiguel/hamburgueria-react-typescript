import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import IconInfo from "../../assets/icon-login-info.svg";

export const FormInfo = () => {
  return (
    <Grid
      w={["100%", "100%", "50%", "50%"]}
      paddingLeft={["0", "0", "100px", "100px"]}
    >
      <Heading
        display="flex"
        alignItems="baseline"
        fontSize="5xl"
        as="h1"
        color="grey.600"
      >
        Burguer
        <Text color="secondary.600" ml="2" fontSize="3xl">
          Kenzie
        </Text>
      </Heading>
      <Flex
        borderRadius="md"
        mt="4"
        border="1px solid"
        borderColor="grey.100"
        maxW="380px"
        h="95px"
        align="center"
        padding="2"
        paddingLeft="4"
      >
        <Center
          backgroundColor="primaryBlur.600"
          fontSize="2xl"
          borderRadius="md"
          w="60px"
          h="60px"
        >
          <Image src={IconInfo} color="primary.600" />
        </Center>
        <Text color="grey.400" fontSize="sm" ml="4">
          A vida é como um sanduíche, é preciso <br /> recheá-la com os
          <b> melhores</b> <br /> ingredientes.
        </Text>
      </Flex>
      <Flex mt="6" w="200px" flexWrap="wrap">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
          (_, index) => (
            <Box
              key={index}
              borderRadius="50%"
              w="12px"
              h="12px"
              bg="grey.50"
              m="10px"
            />
          )
        )}
      </Flex>
    </Grid>
  );
};

import { Flex } from "@chakra-ui/react";

import { FormInfo } from "../../components/Form/FormInfo";
import { SignUpForm } from "./SignUpForm";

export const SignUp = () => {
  return (
    <Flex
      padding={["10px 15px", "10px 15px", "0", "0"]}
      height={["auto", "auto", "100vh", "100vh"]}
      alignItems="center"
      justifyContent="center"
      color="white"
    >
      <Flex
        w={["100%", "100%", "90%", "60%"]}
        justifyContent="center"
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
      >
        <FormInfo />
        <SignUpForm />
      </Flex>
    </Flex>
  );
};

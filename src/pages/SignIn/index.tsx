import { Flex } from "@chakra-ui/react";

import { SignInForm } from "./SignInForm";
import { SignInInfo } from "./SignInInfo";

export const SignIn = () => {
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
        flexDirection={["column-reverse", "column-reverse", "row", "row"]}
        alignItems="center"
      >
        <SignInForm />
        <SignInInfo />
      </Flex>
    </Flex>
  );
};

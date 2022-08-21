import { Text, Box, Grid, Button, Heading, VStack } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { signInSchema } from "./signInSchema";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState } from "react";
import { useHistory } from "react-router-dom";

import { Input } from "../../components/Input";

interface SignInData {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = (data: SignInData) => {
    console.log(data);
  };

  return (
    <Grid
      as="form"
      onSubmit={handleSubmit(handleSignIn)}
      mt={["4", "4", "0"]}
      w={["100%", "100%", "40%", "40%"]}
      padding="30px 15px"
      border="3px solid"
      borderColor="grey.50"
      borderRadius="md"
      bg="white"
      color="grey.600"
    >
      <Heading size="md">Conecte-se</Heading>
      <VStack mt="4" spacing="5">
        <Input
          placeholder="Digite o seu e-mail"
          label="Login"
          type="email"
          error={errors.email}
          {...register("email")}
        />
        <Input
          placeholder="Digite a sua senha"
          label="Senha"
          type="password"
          error={errors.password}
          {...register("password")}
        />
      </VStack>
      <VStack mt="4" spacing="5">
        <Button
          isLoading={loading}
          bg="primary.600"
          color="white"
          w="100%"
          h="60px"
          borderRadius="6px"
          type="submit"
          _hover={{ bg: "success.600" }}
        >
          Entrar
        </Button>
        <Text color="grey.300" textAlign="center">
          Crie sua conta para saborear muitas delícias <br /> e matar sua fome!
        </Text>
        <Button
          bg="grey.50"
          w="100%"
          color="grey.300"
          h="60px"
          borderRadius="8px"
          onClick={() => history.push("/signup")}
          _hover={{
            bg: "grey.100",
          }}
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
};

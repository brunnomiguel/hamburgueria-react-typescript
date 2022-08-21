import { Grid, Button, Heading, VStack, Flex, Link } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { signUpSchema } from "./signUpSchema";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState } from "react";
import { useHistory } from "react-router-dom";

import { api } from "../../services/api";
import { Input } from "../../components/Form/Input";

interface SignUpData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUpForm = () => {
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignIn = ({ name, email, password }: SignUpData) => {
    setLoading(true);
    api
      .post("/register", { name, email, password })
      .then((_) => {
        setLoading(false);
      })
      .catch((_) => {
        setLoading(false);
      });
    reset();
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
      <Flex alignItems="center" justifyContent="space-between" mb="2">
        <Heading size="md">Cadastro</Heading>
        <Link onClick={() => history.push("/")} color="grey.400">
          Retornar para o login
        </Link>
      </Flex>
      <VStack mt="4" spacing="5">
        <Input
          placeholder="Digite o seu nome"
          label="Nome"
          error={errors.name}
          {...register("name")}
        />
        <Input
          placeholder="Digite o seu e-mail"
          label="E-mail"
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
        <Input
          placeholder="Confirme a sua senha"
          label="Confirmação de senha"
          type="password"
          error={errors.confirmPassword}
          {...register("confirmPassword")}
        />
      </VStack>
      <Button
        isLoading={loading}
        bg="grey.100"
        color="grey.400"
        w="100%"
        h="60px"
        mt="4"
        borderRadius="6px"
        type="submit"
        _hover={{ bg: "grey.400", color: "grey.100" }}
      >
        Cadastre-se
      </Button>
    </Grid>
  );
};

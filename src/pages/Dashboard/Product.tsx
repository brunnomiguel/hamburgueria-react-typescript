import {
  Button,
  Center,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

interface Product {
  id: number;
  title: string;
  category: string;
  quantity: number;
  price: number;
  image: string;
}

interface ProductProps {
  product: Product;
}

export const ProductBase = ({ product }: ProductProps) => {
  return (
    <Grid
      h="360px"
      border="2px solid"
      borderColor="grey.100"
      _hover={{ borderColor: "primary.600" }}
    >
      <Center h="160px" bg="grey.50">
        <Image src={product.image} />
      </Center>
      <Grid h="200px">
        <VStack spacing="5" mr="auto" w="100%" paddingLeft="5" paddingTop="4">
          <Heading w="100%" fontSize="lg" color="grey.600">
            {product.title}
          </Heading>
          <Text w="100%" color="grey.400" fontSize="sm">
            {product.category}
          </Text>
          <Text w="100%" fontSize="md" color="primary.600">
            R$ {product.price}
          </Text>
          <Button
            alignSelf="flex-start"
            bg="grey.200"
            color="white"
            _hover={{ bg: "primary.600" }}
            onClick={() => {}}
          >
            Adicionar
          </Button>
        </VStack>
      </Grid>
    </Grid>
  );
};

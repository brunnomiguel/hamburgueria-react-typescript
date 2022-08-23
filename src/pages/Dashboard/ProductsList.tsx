import { Grid } from "@chakra-ui/react";
import { useProduct } from "../../contexts/Products";
import { ProductBase } from "./Product";

export const ProductsList = () => {
  const { products } = useProduct();

  return (
    <Grid
      w="100%"
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      gap="10"
      paddingX="8"
      mt="8"
    >
      {products.map((product) => (
        <ProductBase key={product.id} product={product} />
      ))}
    </Grid>
  );
};

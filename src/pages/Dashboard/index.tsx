import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { useProduct } from "../../contexts/Products";
import { ProductsList } from "./ProductsList";

export const Dashboard = () => {
  const { loadProducts } = useProduct();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts().then((_) => setLoading(false));
  }, []);

  return (
    <>
      <Header />
      <ProductsList />
    </>
  );
};

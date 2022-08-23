import {
  createContext,
  useContext,
  useCallback,
  ReactNode,
  useState,
} from "react";
import { api } from "../../services/api";

interface ProductProviderProps {
  children: ReactNode;
}

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  quantity: number;
  image: string;
}

interface ProductContextData {
  products: Product[];
  loadProducts: () => Promise<void>;
}

const ProductContext = createContext<ProductContextData>(
  {} as ProductContextData
);

export const useProduct = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProduct must be used within an Product");
  }

  return context;
};

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  const loadProducts = useCallback(async () => {
    try {
      const response = await api.get("/products");

      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <ProductContext.Provider value={{ products, loadProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

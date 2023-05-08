import { Sidebar } from "@components/Sidebar";

import { Wrapper } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductDTO } from "src/dtos/ProductDTO";
import { ProductCard } from "@components/ProductCard";

export function Products() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  async function getProducts() {
    axios.get("http://localhost:3001/products").then((res) => {
      console.log(res.data);
      const products_response = res.data;
      setProducts(products_response);
    });
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Wrapper>
        <Sidebar />

        <main>
          <h1>Produtos</h1>

          <ul>
            {products.map((product) => (
              // <div key={product.id}>
              //   <li>{product.id}</li>
              //   <li>{product.name}</li>
              //   <li>{product.measurement_unit_type}</li>
              //   <li>{product.picture}</li>
              // </div>
              <ProductCard product_prop={product} />
            ))}
          </ul>
        </main>
      </Wrapper>
    </div>
  );
}

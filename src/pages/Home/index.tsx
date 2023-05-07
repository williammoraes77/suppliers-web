import { Sidebar } from "@components/Sidebar";

import { Wrapper } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";

export function Home() {
  const [products, setProducts] = useState([]);

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
          <h1>Home</h1>

          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </main>
      </Wrapper>
    </div>
  );
}

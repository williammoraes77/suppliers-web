import { Sidebar } from "@components/Sidebar";

import { Wrapper, HeaderContent, DataContent } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { HomeCard } from "@components/HomeCard";
import { ProductDTO } from "src/dtos/ProductDTO";
import { SupplierDTO } from "src/dtos/SupplierDTO";
import { Link } from "react-router-dom";

export function Home() {
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [suppliers, setSuppliers] = useState<SupplierDTO[]>([]);

  async function getProducts() {
    axios.get("http://localhost:3001/products").then((res) => {
      const products_response = res.data;
      setProducts(products_response);
    });
  }
  async function getSuppliers() {
    axios.get("http://localhost:3001/suppliers").then((res) => {
      const products_response = res.data;
      setSuppliers(products_response);
    });
  }

  useEffect(() => {
    getProducts();
    getSuppliers();
  }, []);
  return (
    <div>
      <Wrapper>
        <Sidebar />

        <main>
          <HeaderContent>
            <h1>Home</h1>
          </HeaderContent>

          <DataContent>
            <Link to="/produtos">
              <HomeCard
                name="Produtos"
                amount={products.length}
                type="product"
              />
            </Link>
            <Link to="/fornecedores">
              <HomeCard
                name="Fornecedores"
                amount={suppliers.length}
                type="supplier"
              />
            </Link>
          </DataContent>
        </main>
      </Wrapper>
    </div>
  );
}

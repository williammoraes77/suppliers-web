import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Wrapper, HeaderContent, DataContent } from "./styles";

import { ProductDTO } from "src/dtos/ProductDTO";
import { SupplierDTO } from "src/dtos/SupplierDTO";
import { Sidebar } from "@components/Sidebar";
import { HomeCard } from "@components/HomeCard";
import { api } from "@services/api";

export function Home() {
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [suppliers, setSuppliers] = useState<SupplierDTO[]>([]);

  async function getProducts() {
    try {
      const response = await api.get("/products");
      const products = response.data;
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  }
  async function getSuppliers() {
    try {
      const response = await api.get("/suppliers");
      const suppliers = response.data;
      setSuppliers(suppliers);
    } catch (error) {
      console.log(error);
    }
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

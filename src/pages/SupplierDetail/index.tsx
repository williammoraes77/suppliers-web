import { Sidebar } from "@components/Sidebar";

import {
  Wrapper,
  DataContent,
  InfoContent,
  Title,
  NameData,
  DataHeader,
  ProductsContainer,
} from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { SupplierDTO } from "src/dtos/SupplierDTO";
import { Button } from "@components/Button";
import { useParams } from "react-router-dom";
import { ProductDTO } from "src/dtos/ProductDTO";
import { ProductCard } from "@components/ProductCard";

export function SupplierDetail() {
  const [supplier, setSupplier] = useState<SupplierDTO>({} as SupplierDTO);
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const filteredProducts = products.filter((product) => {
    return supplier.products_id.includes(product.id);
  });

  const { id } = useParams();

  async function getSupplier() {
    axios.get(`http://localhost:3001/suppliers/${id}`).then((res) => {
      console.log(res.data);
      const suppliers_response = res.data;
      setSupplier(suppliers_response);
    });
  }

  async function getProducts() {
    const res = await axios.get("http://localhost:3001/products");
    const products_response = res.data;
    setProducts(products_response);
  }

  useEffect(() => {
    getSupplier();
    getProducts();
  }, []);

  return (
    <div>
      <Wrapper>
        <Sidebar />

        <main>
          <h1>{supplier.name}</h1>
          <DataContent>
            <DataHeader>
              <InfoContent>
                <Title>CNPJ</Title>
                <NameData>{supplier.cnpj}</NameData>
              </InfoContent>
              <InfoContent>
                <Title>Telefone</Title>
                <NameData>{supplier.phone}</NameData>
              </InfoContent>
              <InfoContent>
                <Title>Endereço</Title>
                <NameData>{supplier.address}</NameData>
              </InfoContent>
            </DataHeader>
            <ProductsContainer>
              {filteredProducts.map((product) => {
                return (
                  <ProductCard product_prop={product} onClick={() => {}} />
                );
              })}
            </ProductsContainer>
          </DataContent>
        </main>
      </Wrapper>
    </div>
  );
}

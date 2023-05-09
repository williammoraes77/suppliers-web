import { Sidebar } from "@components/Sidebar";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import {
  Wrapper,
  DataContent,
  InfoContent,
  Title,
  NameData,
  DataHeader,
  ProductsContainer,
  CardContainer,
  SupplierProducts,
  ButtonContainer,
  StyledCarousel,
  StyledAliceButton,
} from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { SupplierDTO } from "src/dtos/SupplierDTO";
import { useParams } from "react-router-dom";
import { ProductDTO } from "src/dtos/ProductDTO";
import { ProductCard } from "@components/ProductCard";
import { Button } from "@components/Button";

export function SupplierDetail() {
  const [supplier, setSupplier] = useState<SupplierDTO>({} as SupplierDTO);
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [isSupplierTab, setIsSupplierTab] = useState(true);

  const { id } = useParams();

  const filteredSupplierProducts = products.filter((product) => {
    return supplier.products_id && supplier.products_id.includes(product.id);
  });

  const filteredProductsLessOfSupplier = products.filter((product) => {
    return !filteredSupplierProducts.includes(product);
  });

  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 4 },
  };

  console.log(filteredSupplierProducts);
  console.log("-----------");
  console.log(filteredProductsLessOfSupplier);

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
              <ButtonContainer>
                <Button
                  title="Produtos do fornecedor"
                  button_type="primary"
                  onClick={() => setIsSupplierTab(true)}
                />
                <Button
                  title="Adicionar produto"
                  button_type="secondary"
                  onClick={() => setIsSupplierTab(false)}
                />
              </ButtonContainer>
              {isSupplierTab ? (
                <SupplierProducts>
                  <h2>Confira os produtos do fornecedor </h2>
                  {filteredSupplierProducts.length > 0 && (
                    <StyledCarousel
                      renderPrevButton={() => (
                        <StyledAliceButton> {"<"} </StyledAliceButton>
                      )}
                      renderNextButton={() => (
                        <StyledAliceButton> {">"} </StyledAliceButton>
                      )}
                      autoPlay
                      autoPlayInterval={3000}
                      responsive={responsive}
                    >
                      {filteredSupplierProducts.map((product) => (
                        <CardContainer>
                          <ProductCard
                            key={product.id}
                            product_prop={product}
                            onClick={() => {}}
                            card_type="delete"
                          />
                        </CardContainer>
                      ))}
                    </StyledCarousel>
                  )}
                </SupplierProducts>
              ) : (
                <SupplierProducts>
                  <h2>Adicione os produtos ao fornecedor </h2>
                  {filteredSupplierProducts.length > 0 && (
                    <StyledCarousel
                      renderPrevButton={() => (
                        <StyledAliceButton> {"<"} </StyledAliceButton>
                      )}
                      renderNextButton={() => (
                        <StyledAliceButton> {">"} </StyledAliceButton>
                      )}
                      autoPlay
                      autoPlayInterval={3000}
                      responsive={responsive}
                    >
                      {filteredProductsLessOfSupplier.map((product) => (
                        <CardContainer key={product.id}>
                          <ProductCard
                            product_prop={product}
                            onClick={() => {}}
                            card_type="new"
                          />
                        </CardContainer>
                      ))}
                    </StyledCarousel>
                  )}
                </SupplierProducts>
              )}
            </ProductsContainer>
          </DataContent>
        </main>
      </Wrapper>
    </div>
  );
}

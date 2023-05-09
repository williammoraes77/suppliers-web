import { Sidebar } from "@components/Sidebar";
import { useNavigate } from "react-router-dom";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import {
  Wrapper,
  LoadingContainer,
  DataContent,
  HeaderContent,
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
  OptionButton,
} from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { SupplierDTO } from "src/dtos/SupplierDTO";
import { useParams } from "react-router-dom";
import { ProductDTO } from "src/dtos/ProductDTO";
import { ProductCard } from "@components/ProductCard";
import { Button } from "@components/Button";
import Loading from "@components/Loading";

export function SupplierDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const [supplier, setSupplier] = useState<SupplierDTO>({} as SupplierDTO);
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [isSupplierTab, setIsSupplierTab] = useState(true);

  const { id } = useParams();

  const navigate = useNavigate();

  const filteredSupplierProducts = products.filter((product) => {
    return supplier.products_id && supplier.products_id.includes(product.id);
  });

  let filteredProductsLessOfSupplier = [];

  if (filteredSupplierProducts.length == 0) {
    filteredProductsLessOfSupplier = products;
  } else {
    filteredProductsLessOfSupplier = products.filter((product) => {
      return !filteredSupplierProducts.includes(product);
    });
  }

  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 4 },
  };

  async function getSupplier() {
    axios.get(`http://localhost:3001/suppliers/${id}`).then((res) => {
      const suppliers_response = res.data;
      setSupplier(suppliers_response);
    });
  }

  async function getProducts() {
    const res = await axios.get("http://localhost:3001/products");
    const products_response = res.data;
    setProducts(products_response);
  }

  async function deleteProduct(product_id: number) {
    const products_id = supplier.products_id.filter(
      (prod_id) => prod_id != product_id
    );

    const newSupplier = {
      name: supplier.name,
      address: supplier.address,
      phone: supplier.phone,
      cnpj: supplier.cnpj,
      products_id: products_id,
    } as SupplierDTO;

    const response = await axios.put(
      `http://localhost:3001/suppliers/${id}`,
      newSupplier
    );

    getSupplier();
    getProducts();
  }

  async function addProductToSupplier(product_id: number) {
    supplier.products_id.push(product_id);

    const newSupplier = {
      name: supplier.name,
      address: supplier.address,
      phone: supplier.phone,
      cnpj: supplier.cnpj,
      products_id: supplier.products_id,
    } as SupplierDTO;

    const response = await axios.put(
      `http://localhost:3001/suppliers/${id}`,
      newSupplier
    );

    getSupplier();
    getProducts();
  }

  async function deleteSupplier() {
    axios
      .delete("http://localhost:3001/suppliers/" + supplier.id)
      .then((response) => {
        navigate("/fornecedores");
      })
      .catch((error) => {
        console.error("Erro ao excluir o item:", error);
      });
  }

  useEffect(() => {
    setIsLoading(true);
    getSupplier();
    getProducts();
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  return (
    <div>
      <Wrapper>
        <Sidebar />

        <main>
          {isLoading ? (
            <LoadingContainer>
              <Loading />
            </LoadingContainer>
          ) : (
            <>
              <HeaderContent>
                <h1>{supplier.name}</h1>
                <Button
                  title="Deletar Fornecedor"
                  onClick={() => deleteSupplier()}
                  button_type="delete"
                />
              </HeaderContent>

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
                    <OptionButton
                      onClick={() => setIsSupplierTab(true)}
                      active={isSupplierTab}
                    >
                      Produtos do fornecedor
                    </OptionButton>
                    <OptionButton
                      onClick={() => setIsSupplierTab(false)}
                      active={!isSupplierTab}
                    >
                      Adicionar produto
                    </OptionButton>
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
                                onClick={() => deleteProduct(product.id)}
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
                              onClick={() => addProductToSupplier(product.id)}
                              card_type="new"
                            />
                          </CardContainer>
                        ))}
                      </StyledCarousel>
                    </SupplierProducts>
                  )}
                </ProductsContainer>
              </DataContent>
            </>
          )}
        </main>
      </Wrapper>
    </div>
  );
}

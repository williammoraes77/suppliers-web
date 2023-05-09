import React from "react";
import Modal from "react-modal";
import { Sidebar } from "@components/Sidebar";

import { Col, Row } from "react-grid-system";

import { useEffect, useState } from "react";
import axios from "axios";
import { ProductDTO } from "src/dtos/ProductDTO";
import { ProductCard } from "@components/ProductCard";
import { Button } from "@components/Button";

import {
  Wrapper,
  DataContent,
  HeaderContent,
  Form,
  FormContent,
  Label,
  Input,
  ButtonContainer,
} from "./styles";

import Loading from "@components/Loading";
import Message from "@components/Message";
import { SupplierDTO } from "src/dtos/SupplierDTO";

Modal.setAppElement("#root");

export function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [suppliers, setSuppliers] = useState<SupplierDTO[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [measurementUnitType, setMeasurementUnitType] = useState("unidade");
  const [productExist, setProductExist] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function createProduct() {
    setLoading(true);
    const productAlreadyExists = products.filter(
      (product) => product.name == name && product.brand == brand
    );

    if (productAlreadyExists.length == 0) {
      const product = {
        name,
        brand,
        measurement_unit_type: measurementUnitType,
      } as ProductDTO;
      const res = await axios.post("http://localhost:3001/products", product);
      const newProductResponse = res.data;
      setProducts((prevProducts) => [...prevProducts, newProductResponse]);
      setLoading(false);
      setMessageSuccess(true);
      setTimeout(() => setIsModalOpen(false), 1200);
      setTimeout(() => setMessageSuccess(false), 1200);
    } else {
      setLoading(false);
      setProductExist(true);
      setTimeout(() => setProductExist(false), 2000);
    }
  }

  async function deleteProduct(product_id: number) {
    setIsModalDeleteOpen(true);
    axios
      .delete("http://localhost:3001/products/" + product_id)
      .then((response) => {
        const updateProducts = products.filter(
          (product) => product.id != product_id
        );

        suppliers.forEach((supplier) => {
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

          const response = axios.put(
            `http://localhost:3001/suppliers/${supplier.id}`,
            newSupplier
          );
        });
        setProducts(updateProducts);
      })
      .catch((error) => {
        console.error("Erro ao excluir o item:", error);
      });
  }

  async function getProducts() {
    const res = await axios.get("http://localhost:3001/products");
    const products_response = res.data;
    setProducts(products_response);
  }
  async function getSuppliers() {
    const res = await axios.get("http://localhost:3001/suppliers");
    const products_response = res.data;
    setSuppliers(products_response);
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    createProduct();
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
            <h1>Produtos</h1>
            <Button
              title="Novo Produto"
              onClick={() => setIsModalOpen(true)}
              button_type="primary"
            />
          </HeaderContent>

          <DataContent>
            <React.Fragment>
              <Row style={{ marginBottom: 20 }}>
                {products.map((product) => (
                  <Col xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <ProductCard
                      product_prop={product}
                      onClick={() => deleteProduct(product.id)}
                      card_type="delete"
                    />
                  </Col>
                ))}
              </Row>
            </React.Fragment>

            <Modal
              isOpen={isModalDeleteOpen}
              onRequestClose={() => setIsModalDeleteOpen(false)}
            >
              <Form>
                <Message text="Produto deletado com sucesso!" type="success" />
              </Form>

              <ButtonContainer>
                <Button
                  title="OK"
                  type="submit"
                  button_type="primary"
                  onClick={() => setIsModalDeleteOpen(false)}
                />
              </ButtonContainer>
            </Modal>

            <Modal
              isOpen={isModalOpen}
              onRequestClose={() => setIsModalOpen(false)}
            >
              <Form onSubmit={handleSubmit}>
                <FormContent>
                  <Label htmlFor="name">Descrição(nome do produto)</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Digite o nome do produto"
                    onChange={(event) => setName(event.target.value)}
                    required
                  />

                  <Label htmlFor="email">Marca:</Label>
                  <Input
                    type="text"
                    id="brand"
                    name="brand"
                    placeholder="Digite a marca"
                    onChange={(event) => setBrand(event.target.value)}
                    required
                  />

                  <Label htmlFor="message">Unidade de medida :</Label>

                  <select
                    name="measurement_unit"
                    id="measurement_unit"
                    onChange={(event) =>
                      setMeasurementUnitType(event.target.value)
                    }
                  >
                    <option value="unidade">Unidade</option>
                    <option value="quilograma">Quilograma</option>
                    <option value="metro">Metro</option>
                  </select>

                  {/* <Label htmlFor="message">Foto :</Label> */}

                  {productExist && (
                    <Message text="Este produto já existe!" type="error" />
                  )}

                  {messageSuccess && (
                    <Message
                      text="Produto cadastrado com sucesso!"
                      type="success"
                    />
                  )}
                  {loading ? (
                    <Loading />
                  ) : (
                    <ButtonContainer>
                      <Button
                        title="Cadastrar"
                        type="submit"
                        button_type="primary"
                        disabled={messageSuccess}
                      />
                    </ButtonContainer>
                  )}

                  <ButtonContainer>
                    <Button
                      title="Cancelar"
                      type="submit"
                      onClick={() => setIsModalOpen(false)}
                      button_type="secondary"
                    />
                  </ButtonContainer>
                </FormContent>
              </Form>
            </Modal>
          </DataContent>
        </main>
      </Wrapper>
    </div>
  );
}

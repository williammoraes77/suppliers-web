import { Sidebar } from "@components/Sidebar";
import Modal from "react-modal";
// import InputMask from "react-input-mask";

import {
  Wrapper,
  HeaderContent,
  DataContent,
  Table,
  TableRow,
  TableHeader,
  TableData,
  Form,
  FormContent,
  Label,
  Input,
  ButtonContainer,
  InputCnpj,
  TableWrapper,
} from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { SupplierDTO } from "src/dtos/SupplierDTO";
import { Button } from "@components/Button";
import Message from "@components/Message";
import Loading from "@components/Loading";
import { Link } from "react-router-dom";

export function Suppliers() {
  const [suppliers, setSuppliers] = useState<SupplierDTO[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [name, setName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [street, setStreet] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [userProducts, setUserProducts] = useState(false);
  const [products, setProducts] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [supplierExist, setSupplierExist] = useState(false);
  const [cnpjError, setCnpjError] = useState(false);

  const handleCnpjChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCnpj(event.target.value);
  };

  async function getSuppliers() {
    axios.get("http://localhost:3001/suppliers").then((res) => {
      const suppliers_response = res.data;
      setSuppliers(suppliers_response);
    });
  }

  async function createSuppier() {
    setLoading(true);
    const suppliertAlreadyExists = suppliers.filter(
      (supplier) => supplier.cnpj == cnpj
    );

    let verifyCnpj = cnpj.replace(/_/g, "");
    let new_address = `${street}, ${number}, ${neighborhood}, ${city}`;

    let products_ids: Array<number> = [];

    if (suppliertAlreadyExists.length == 0 && verifyCnpj.length >= 18) {
      const supplier = {
        name,
        cnpj,
        phone,
        address: new_address,
        products_id: products_ids,
      } as SupplierDTO;
      const res = await axios.post("http://localhost:3001/suppliers", supplier);
      const newSupplierResponse = res.data;
      setSuppliers((prevSuppleires) => [
        ...prevSuppleires,
        newSupplierResponse,
      ]);
      setLoading(false);
      setMessageSuccess(true);
      setTimeout(() => setIsModalOpen(false), 2000);
      setTimeout(() => setMessageSuccess(false), 2000);
      setTimeout(() => clearFields(), 2000);
    } else if (verifyCnpj.length < 18) {
      setLoading(false);
      setCnpjError(true);
      setTimeout(() => setCnpjError(false), 2000);
    } else {
      setLoading(false);
      setSupplierExist(true);
      setTimeout(() => setSupplierExist(false), 2000);
    }
  }

  async function fetchCep(value: string) {
    const res = await axios.get(`https://viacep.com.br/ws/${value}/json/`);
    const addrassData = res.data;
    setStreet(addrassData.logradouro);
    setNeighborhood(addrassData.bairro);
    setCity(addrassData.localidade);
  }

  function validateCep(value: string) {
    if (value.length == 8) {
      fetchCep(value);
    }
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    createSuppier();
  }

  function clearFields() {
    setName("");
    setCnpj("");
    setAddress("");
    setStreet("");
    setNeighborhood("");
    setCity("");
    setNumber("");
    setPhone("");
  }

  useEffect(() => {
    getSuppliers();
  }, []);

  return (
    <div>
      <Wrapper>
        <Sidebar />

        <main>
          <HeaderContent>
            <h1>Fornecedores</h1>
            <Button
              title="Novo Fornecedor"
              onClick={() => setIsModalOpen(true)}
              button_type="primary"
            />
          </HeaderContent>
          <DataContent>
            <TableWrapper>
              <Table>
                <thead>
                  <TableRow>
                    <TableHeader>Nome</TableHeader>
                    <TableHeader>CNPJ</TableHeader>
                    <TableHeader>Endereço</TableHeader>
                    <TableHeader>Telefone</TableHeader>
                    <TableHeader>Produtos</TableHeader>
                  </TableRow>
                </thead>
                <tbody>
                  {suppliers.map((supplier) => (
                    <TableRow key={supplier.id}>
                      <TableData>{supplier.name}</TableData>
                      <TableData>{supplier.cnpj}</TableData>
                      <TableData>{supplier.address}</TableData>
                      <TableData>{supplier.phone}</TableData>
                      <TableData>
                        <Link to={`/fornecedores/detail/${supplier.id}`}>
                          <Button
                            title="Gerenciar produtos"
                            button_type="secondary"
                          />
                        </Link>
                      </TableData>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableWrapper>

            <Modal
              isOpen={isModalOpen}
              onRequestClose={() => setIsModalOpen(false)}
            >
              <Form onSubmit={handleSubmit}>
                <FormContent>
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Digite o nome do fornecedor"
                    onChange={(event) => setName(event.target.value)}
                    required
                  />

                  <Label htmlFor="email">CNPJ:</Label>

                  <InputCnpj
                    type="text"
                    id="cnpj"
                    name="cnpj"
                    mask="99.999.999/9999-99"
                    value={cnpj}
                    onChange={handleCnpjChange}
                    minLength={18}
                    required
                  />

                  <Label htmlFor="message">Endereço :</Label>

                  <Label htmlFor="message">CEP :</Label>
                  <Input
                    type="text"
                    id="cep"
                    name="cep"
                    placeholder="Digite o CEP"
                    onBlur={(event) => fetchCep(event.target.value)}
                    onChange={(event) => validateCep(event.target.value)}
                    maxLength={8}
                    required
                  />

                  <Label htmlFor="message">Rua :</Label>
                  <Input
                    type="text"
                    id="street"
                    name="street"
                    placeholder=""
                    value={street}
                    required
                  />

                  <Label htmlFor="message">Bairro :</Label>
                  <Input
                    type="text"
                    id="neighborhood"
                    name="neighborhood"
                    placeholder=""
                    value={neighborhood}
                    required
                  />

                  <Label htmlFor="message">Cidade :</Label>
                  <Input
                    type="text"
                    id="city"
                    name="city"
                    placeholder=""
                    value={city}
                    required
                  />
                  <Label htmlFor="message">Numero :</Label>
                  <Input
                    type="text"
                    id="number"
                    name="number"
                    placeholder=""
                    onChange={(event) => setNumber(event.target.value)}
                    required
                  />

                  <Label htmlFor="message">Telefone :</Label>
                  <Input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Digite o telefone"
                    onChange={(event) => setPhone(event.target.value)}
                    required
                  />

                  {/* <Label htmlFor="message">Produtos :</Label> */}

                  {supplierExist && (
                    <Message text="Este fornecedor já existe!" type="error" />
                  )}
                  {cnpjError && (
                    <Message text="CNPJ nao está completo" type="error" />
                  )}

                  {messageSuccess && (
                    <Message
                      text="Fornecedor cadastrado com sucesso!"
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

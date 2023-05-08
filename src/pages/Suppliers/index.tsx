import { Sidebar } from "@components/Sidebar";

import {
  Wrapper,
  DataContent,
  Table,
  TableRow,
  TableHeader,
  TableData,
} from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { SupplierDTO } from "src/dtos/SupplierDTO";
import { Button } from "@components/Button";

export function Suppliers() {
  const [suppliers, setSuppliers] = useState<SupplierDTO[]>([]);

  async function getSuppliers() {
    axios.get("http://localhost:3001/suppliers").then((res) => {
      console.log(res.data);
      const suppliers_response = res.data;
      setSuppliers(suppliers_response);
    });
  }

  useEffect(() => {
    getSuppliers();
  }, []);

  return (
    <div>
      <Wrapper>
        <Sidebar />

        <main>
          <h1>Fornecedores</h1>
          <DataContent>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader>Nome</TableHeader>
                  <TableHeader>CNPJ</TableHeader>
                  <TableHeader>Endereço</TableHeader>
                  <TableHeader>Telefone</TableHeader>
                  <TableHeader>Detalhes</TableHeader>
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
                      <Button title="Detalhes" />
                    </TableData>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </DataContent>
          {/* <ul>
            {suppliers.map((supplier) => (
              <div key={supplier.id}>
                <li>{supplier.id}</li>
                <li>{supplier.cnpj}</li>
                <li>{supplier.address}</li>
                {supplier.products_id.map((item) => (
                  <li>{item}</li>
                ))}
              </div>
            ))}
          </ul> */}
        </main>
      </Wrapper>
    </div>
  );
}

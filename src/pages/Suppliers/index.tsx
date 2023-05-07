import { Sidebar } from "@components/Sidebar";

import { Wrapper } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { SupplierDTO } from "src/dtos/SupplierDTO";

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
          <ul>
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
          </ul>
        </main>
      </Wrapper>
    </div>
  );
}

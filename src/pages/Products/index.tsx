import { Sidebar } from "@components/Sidebar";

import { Wrapper } from "./styles";

export function Products() {
  return (
    <div>
      <Wrapper>
        <Sidebar />

        <main>
          <h1>Produtos</h1>
        </main>
      </Wrapper>
    </div>
  );
}

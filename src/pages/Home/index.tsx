import { Sidebar } from "@components/Sidebar";

import { Wrapper } from "./styles";

export function Home() {
  return (
    <div>
      <Wrapper>
        <Sidebar />

        <main>
          <h1>Home</h1>
        </main>
      </Wrapper>
    </div>
  );
}

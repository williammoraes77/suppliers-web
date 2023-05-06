import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Products } from "./pages/Products";
import { Suppliers } from "./pages/Suppliers";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/fornecedores" element={<Suppliers />} />
      </Route>
    </Routes>
  );
}

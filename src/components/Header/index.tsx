import { NavLink } from "react-router-dom";
import { HeaderContainer, HeaderContent } from "./styles";

import LogoImg from "@assets/genialnet_logo.png";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} alt="" />
        <nav>
          <NavLink to="/">
            <a>Home</a>
          </NavLink>
          <NavLink to="/produtos">
            <a>Produtos</a>
          </NavLink>{" "}
          <NavLink to="/fornecedores">
            <a>Fornecedores</a>
          </NavLink>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  );
}

import { BookOpen, House, MonitorPlay } from "@phosphor-icons/react";

import {
  SideBarContainer,
  SidebarTitle,
  Options,
  CardLinkOption,
} from "./styles";
import { useTheme } from "styled-components";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  const theme = useTheme();
  return (
    <SideBarContainer>
      <SidebarTitle>Geral</SidebarTitle>
      <Options>
        <NavLink to="/" title="Home">
          <CardLinkOption>
            <House size={22} color={theme.fontColor} weight="fill" />
            <span>Home</span>
          </CardLinkOption>
        </NavLink>
        <NavLink to="/produtos" title="Listar">
          <CardLinkOption>
            <MonitorPlay size={22} color={theme.fontColor} weight="fill" />
            <span>Produtos</span>
          </CardLinkOption>
        </NavLink>
        <NavLink to="/fornecedores" title="Listar">
          <CardLinkOption>
            <BookOpen size={22} color={theme.fontColor} weight="fill" />
            <span>Fornecedores</span>
          </CardLinkOption>
        </NavLink>
      </Options>
    </SideBarContainer>
  );
}

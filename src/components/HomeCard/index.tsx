import { Package, Users } from "@phosphor-icons/react";

import { useTheme } from "styled-components";

import {
  BalanceContent,
  BottomContent,
  BottomLink,
  TopContent,
} from "./styles";

interface Props {
  name: string;
  amount: number;
  type: "product" | "supplier";
}

export function HomeCard({ name, amount, type }: Props) {
  const theme = useTheme();
  return (
    <BalanceContent>
      <TopContent>
        {type === "product" ? (
          <Package size={72} color={theme.colors.primary} weight="fill" />
        ) : (
          <Users size={72} color={theme.colors.primary} weight="fill" />
        )}

        <header>
          <span>Total</span>
          <strong>{amount}</strong>
        </header>
      </TopContent>
      <BottomContent>
        <BottomLink>{name}</BottomLink>
      </BottomContent>
    </BalanceContent>
  );
}

import React from "react";
import { Trash } from "@phosphor-icons/react";

import { ButtonContent } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  button_type: "primary" | "secondary" | "delete";
}

export function Button({ title, button_type, ...restProps }: ButtonProps) {
  return (
    <ButtonContent {...restProps} button_type={button_type}>
      {button_type === "delete" ? (
        <Trash size={22} color="#a42020" weight="fill" />
      ) : (
        title
      )}
    </ButtonContent>
  );
}

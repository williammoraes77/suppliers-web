import React from "react";
import { ButtonContent } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  button_type: "primary" | "secondary";
}

export function Button({ title, button_type, ...restProps }: ButtonProps) {
  return (
    <ButtonContent {...restProps} button_type={button_type}>
      {title}
    </ButtonContent>
  );
}

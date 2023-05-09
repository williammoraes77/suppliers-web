import styled, { css } from "styled-components";

interface Props {
  button_type: "primary" | "secondary" | "delete";
}

export const ButtonContent = styled.button<Props>`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  background-color: #4caf50;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }

  ${({ theme, button_type }) =>
    button_type === "primary"
      ? css`
          background-color: ${theme.colors["green-500"]};
        `
      : css`
          background-color: ${theme.colors.buttomSecondary};
          &:hover {
            background-color: #7ec8ea;
          }
        `}

  ${({ theme, button_type }) =>
    button_type === "delete" &&
    css`
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors["red-500"]};
      color: ${theme.colors["red-500"]};

      &:hover {
        color: ${theme.colors.white};
      }
    `}
`;

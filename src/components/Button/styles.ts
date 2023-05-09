import styled, { css } from "styled-components";

interface Props {
  button_type: "primary" | "secondary" | "delete";
}

export const ButtonContent = styled.button<Props>`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;

  color: white;
  cursor: pointer;

  ${({ theme, button_type }) =>
    button_type === "primary"
      ? css`
          background-color: ${theme.colors["green-500"]};
        `
      : css`
          background-color: ${theme.colors.buttomSecondary};
          &:hover {
            background-color: #ccd8dd;
            &:hover {
              color: ${theme.colors.fontColor};
            }
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

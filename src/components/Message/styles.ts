import styled, { css } from "styled-components";

interface Props {
  type: "success" | "error";
}

export const MessageContainer = styled.div<Props>`
  width: 100%;
  padding: 10px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors["red-700"]};

  ${({ theme, type }) =>
    type === "error"
      ? css`
          background-color: ${theme.colors["red-500"]};
        `
      : css`
          background-color: ${theme.colors["green-500"]};
        `}
`;

export const MessageText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

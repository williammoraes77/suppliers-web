import styled, { css } from "styled-components";

export const BalanceContent = styled.div`
  min-width: 250px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  header {
    flex: 1;
    color: ${({ theme }) => theme.colors.primary};
    margin-left: 20px;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }
`;

export const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3rem;
`;

export const BottomContent = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors["gray-300"]};
  padding-top: 1rem;
`;

export const BottomLink = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
`;

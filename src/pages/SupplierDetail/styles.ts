import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 85rem;
  margin: 2rem auto;
  padding: 0 1 rem;

  display: grid;
  grid-template-columns: 296px 1fr;

  gap: 1rem;
  /* align-items: flex-start; */

  main {
    padding: 1.5rem;
    background-color: ${({ theme }) => theme.colors.backgroundDark};
    border-radius: 16px;
  }
`;

export const DataContent = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
`;

export const DataHeader = styled.div`
  width: 100%;
  display: flex;
`;

export const InfoContent = styled.div`
  margin: 2rem;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.font_size.SM_MD}px;
`;

export const NameData = styled.p`
  font-size: ${({ theme }) => theme.font_size.LG}px;
`;

export const ProductsContainer = styled.div`
  width: 100%;
`;

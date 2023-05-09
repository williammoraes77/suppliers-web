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

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 296px 1fr;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

export const DataContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 767px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;
`;

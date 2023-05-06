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
    background-color: ${({ theme }) => theme.backgroundDark};
    border-radius: 16px;
  }
`;

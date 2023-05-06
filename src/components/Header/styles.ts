import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: rgb(8, 45, 103);
  background: linear-gradient(
    90deg,
    rgba(8, 45, 103, 1) 0%,
    rgba(8, 82, 142, 1) 50%,
    rgba(0, 125, 187, 1) 100%
  );
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1370px;
  margin: 0 auto;
  padding: 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    align-items: center;
    display: flex;

    gap: 2rem;

    a {
      color: white;
    }
  }
`;

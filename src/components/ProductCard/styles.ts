import styled from "styled-components";

export const CardContainer = styled.div`
  width: 250px;
  /* height: 200px; */

  /* border: 1px solid ${({ theme }) => theme.backgroundLight}; */
  border: 1px solid red;
  background-color: ${({ theme }) => theme.white};

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const InfoContainer = styled.div`
  padding: 1rem;

  border-top: solid 1px ${({ theme }) => theme["gray-400"]};
`;

export const ProductTitle = styled.p`
  margin-bottom: 15px;
`;

export const InfoContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UnityMeasurement = styled.p``;

export const Brand = styled.p``;

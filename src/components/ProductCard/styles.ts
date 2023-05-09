import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 250px;
  flex: 1;

  border: 1px solid ${({ theme }) => theme.colors.backgroundLight};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 12px;

  margin-bottom: 20px;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  padding: 1rem;

  border-top: solid 1px ${({ theme }) => theme.colors["gray-100"]};
`;

export const ProductTitle = styled.p`
  font-weight: bold;
  margin-bottom: 15px;
`;

export const InfoContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UnityMeasurementTitle = styled.p`
  font-size: ${({ theme }) => theme.font_size.SM}px;
`;
export const BrandTitle = styled.p`
  font-size: ${({ theme }) => theme.font_size.SM}px;
`;

export const UnityMeasurement = styled.p`
  font-weight: bold;
`;

export const Brand = styled.p`
  font-weight: bold;
`;

export const ButtonContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 5px;
`;

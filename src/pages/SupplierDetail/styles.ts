import AliceCarousel from "react-alice-carousel";
import styled, { css } from "styled-components";

interface NavProps {
  active: boolean;
}

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

export const LoadingContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;
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
export const SupplierProducts = styled.div`
  width: 100%;
  margin: 0 auto;

  h2 {
    margin-bottom: 20px;
  }
`;

export const ProductsContainer = styled.div`
  width: 100%;
  max-width: 880px;
  display: flex;
  flex: 1;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  /* margin: 0 auto; */
  /* border: 1px solid red; */
  background-color: ${({ theme }) => theme.colors.backgroundDark};

  border-radius: 12px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  padding: 30px;
`;

export const CardContainer = styled.div`
  margin-right: 10px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
`;

export const StyledAliceButton = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 50%;
  color: #000;
  font-size: 24px;
  height: 50px;
  width: 50px;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const StyledCarousel = styled(AliceCarousel)`
  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    font-size: 44px;
    width: 150px;
    height: 150px;
  }
`;

export const OptionButton = styled.button<NavProps>`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors["gray-700"]};
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 12px;

  ${({ theme, active }) =>
    active &&
    css`
      border-bottom: 3px solid ${theme.colors["gray-700"]};
      color: ${theme.colors.primary};
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    `}
`;

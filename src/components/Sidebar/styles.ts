import styled from "styled-components";

export const SideBarContainer = styled.aside`
  background-color: ${({ theme }) => theme.backgroundLight};
  border-radius: 16px;
  padding: 1rem;
`;

export const SideBarCardContent = styled.div`
  padding: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.fontColor};
  border-bottom: 1px solid ${({ theme }) => theme.fontColor};
`;

export const SidebarTitle = styled.h3`
  padding: 1rem 0.6rem;
  color: ${({ theme }) => theme.fontColor};
`;

export const Options = styled.div``;

export const CardLinkOption = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-bottom: 0.3rem;
  border-radius: 8px;

  span {
    margin-left: 10px;
    color: ${({ theme }) => theme.fontColor};
  }

  &:hover {
    /* background-color: ${({ theme }) => theme.fontColorDark}; */
    background: linear-gradient(
      90deg,
      rgba(8, 45, 103, 1) 0%,
      rgba(8, 82, 142, 1) 50%,
      rgba(0, 125, 187, 1) 100%
    );

    span {
      color: ${({ theme }) => theme.fontColorLight};
    }
  }
`;

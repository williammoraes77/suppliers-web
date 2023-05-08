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

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  font-size: 16px;
  font-family: Arial, sans-serif;
`;

export const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  background-color: #ddd;
  border: 1px solid #ccc;
`;

export const TableData = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

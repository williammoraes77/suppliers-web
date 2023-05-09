import styled from "styled-components";
import InputMask from "react-input-mask";

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

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const Form = styled.form``;

export const FormContent = styled.div`
  display: flex;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundLight};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  padding: 20px;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;

  select {
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.fontColor};
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    border: none;
    border-radius: 5px;
    appearance: none; /* remove a setinha padrão do "select" */
  }

  /* estilo para as opções dentro do "select" */
  option {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    background-color: red;
  }
`;

export const Label = styled.label`
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
`;

export const ButtonContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  margin: 15px 0;
`;

export const InputCnpj = styled(InputMask)`
  padding: 8px;
  margin-bottom: 16px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
`;

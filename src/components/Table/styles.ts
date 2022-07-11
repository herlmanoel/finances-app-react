import styled from "styled-components";
import { FiEdit, FiTrash } from "react-icons/fi";
import { COLORS } from "../../assets/styles/Colors";

export const TableContainer = styled.table`
  margin-top: 30px;
  border-collapse: collapse;
  border-collapse: separate;
  border-spacing: 0 10px;
`;

export const TableHeader = styled.thead``;

export const TableTh = styled.th`
  text-transform: uppercase;
  padding: 5px 20px;
`;

export const TableTd = styled.td`
  border: none;
  padding: 20px;
  text-align: center;
`;

export const StatusTransaction = styled.p`
  border-radius: 4px;
  width: 80px;
  padding: 0.2rem;
  text-align: center;
  background-color: ${COLORS.white};

  &.statusInput {
    background-color: ${COLORS.green};
    color: #fff;
  }

  &.statusOutput {
    background-color: ${COLORS.red};
    color: #fff;
  }
`;

export const TableBody = styled.tbody`
  tr {
    border-spacing: 0;
    margin-bottom: 8px;
    border-radius: 15px;
    background-color: ${COLORS.white};
  }
`;

export const ButtonEdit = styled(FiEdit)`
  color: ${COLORS.green};
  cursor: pointer;
  padding: 10px;
`;

export const ButtonDelete = styled(FiTrash)`
  color: ${COLORS.red};
  cursor: pointer;
  padding: 10px;
`;

export const Select = styled.select`
  color: ${COLORS.colorInput};
  appearance: none;
  height: 60px;
  outline: 0;
  border: 0;
  box-shadow: none;
  padding: 2% 3%;
  border-radius: 8px;
  width: 49%;

  option {
    width: 100%;
    height: 45px !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    transition: all 300ms;
  }

  
`;

export const ContainerFilter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const ContainerSelects = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleFilter = styled.h1`
  font-size: 15px;
  font-weight: 400;
  color: ${COLORS.colorInput};
  margin-top: 2%;
  margin-bottom: 1%;
`;
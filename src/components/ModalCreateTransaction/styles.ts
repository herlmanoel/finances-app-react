import styled from "styled-components";

const COLORS = {
  shadow: "rgba(0, 0, 0, 0.08)",
  statusInput: "green",
  statusOutput: "red",
  white: "#fff",
  background: "#F0F2F5",
  green: "#49AA26",
  red: "#EB797A",
  colorInput: "#8A8A8A",
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 50vh;
  background-color: ${COLORS.background};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
  width: 94%;
  padding: 3%;
  border: none;
  border-radius: 8px;
  margin-top: 2%;
`;

export const Button = styled.button`
  width: 100%;
  padding: 3%;
  border: none;
  border-radius: 8px;
  margin-top: 2%;
  /* background-color: ${COLORS.white}; */

  color: ${COLORS.shadow};
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  color: #fff;

  &.cancelar {
    background-color: ${COLORS.red};
  }

  &.confirmar {
    background-color: ${COLORS.green};
  }

  & + & {
    margin-left: 2%;
  }

  &:hover {
    background-color: ${COLORS.shadow};
    color: ${COLORS.white};
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2%;
`;

export const Select = styled.select`
  color: ${COLORS.colorInput};
  appearance: none;
  height: 60px;
  margin-top: 2%;
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

export const ContainerSelects = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
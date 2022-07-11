import styled from "styled-components";
import { COLORS } from '../../assets/styles/Colors';


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 800px;
  min-width: 600px;
`;

export const Card = styled.div`
  height: 80px;
  width: 25%;
  border-radius: 10px;
  background-color: ${COLORS.white};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    font-size: 15px;
    font-weight: bold;
    color: ${COLORS.grey};
    font-weight: 400;
  }

  h2 {
    font-size: 20px;
    font-weight: bold;
  }

  &.entrada {
    box-shadow: 0px 0px 7px 0px ${COLORS.greenCard};
  }

  &.saida {
    box-shadow: 0px 0px 7px 0px ${COLORS.redCard};
  }

  &.total {
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
  }
  
`;

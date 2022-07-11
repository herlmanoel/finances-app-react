import styled from 'styled-components';
import { COLORS } from '../../assets/styles/Colors';

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: ${COLORS.background};
`;

export const Container = styled.div`
    margin-top: 2%;
    max-width: 90%;
    /* height: 100%; */
`;

export const ButtonFloating = styled.button`
    position:fixed;
    cursor: pointer;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color: ${COLORS.green};
	border-radius:50px;
    border: none;
	text-align:center;
	box-shadow: 2px 2px 3px #999;
`;

export const Title = styled.h1`
    font-size: 20px;
    text-align: center;
    margin-top: 30%;
`;
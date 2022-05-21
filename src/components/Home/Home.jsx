//import { useEffect } from "react";
import Header from "../Header/Header.jsx";
import styled from "styled-components";
import {IoIosArrowForward} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import { useState } from "react";

export default function Home(){
    const [isSelected, setSelected] = useState(false);
    const navigate = useNavigate();
    
    return (
        <>
            <Header />
            <ContainerHome>
                <Div>
                    <Title>Módulo 1</Title>
                    <IoIosArrowForward color="#0000cd" size={30} onClick={() => setSelected(true)}/>
                </Div>
                <DivQuestion opened={isSelected}>
                    <Title >Abri a  questão?</Title>
                </DivQuestion>

            </ContainerHome>
            
        </>
    )
}

const ContainerHome= styled.main`
    width: 100vw;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 15px;
    gap: 7px;
`;
const Div = styled.div`
    width: 300px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #ffffff;

    border-radius: 5px;
    padding: 5px;

`;
const Title = styled.h1`
    color: #0000cd;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 18px;
`;

const DivQuestion = styled.div`
    width: 300px;
    height: 40px;

    display: ${props => props.opened ? "flex" : "none"};
    align-items: center;
    justify-content: space-between;

    background-color: #ffffff;

    border-radius: 5px;
    padding: 5px;
`;
//import { useEffect } from "react";
import Header from "../Header/Header.jsx";
import styled from "styled-components";
import {IoIosArrowForward} from "react-icons/io";
//import {useNavigate} from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext.jsx";
import axios from "axios";

export default function Home(){
    const {token} = useContext(UserContext);
    const [isSelected, setSelected] = useState(false);
    const [questions, setQuestions] = useState([]);
    // const navigate = useNavigate();

    useEffect(() => {
        const URL_questions = `${process.env.REACT_APP_URL_API}/questions`;
        const config = {headers: { Authorization: `Bearer ${token}`}};
        const request = axios.get(URL_questions, config);

        request.then((response) => {
            console.log(response.data);
            setQuestions(response.data);
        });
        request.catch(e => console.log("error", e));
    }, []);


    
    return (
        <>
            <Header />
            <ContainerHome>
                <Div>
                    <Title>Módulo 1</Title>
                    <IoIosArrowForward color="#0000cd" size={30} onClick={() => setSelected(true)}/>
                </Div>
                <DivQuestion opened={isSelected}>
                {questions.map((question,id) =>{
                
                    <Title key={id}>{question.name}</Title>
                
                })}
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
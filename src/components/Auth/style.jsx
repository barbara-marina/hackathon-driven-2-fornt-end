import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h1`
    font-family: 'Press Start 2P', cursive;
    font-size: 32px;
    line-height: 30px;
    font-weight: 400;
    color: #0000CD;
`

const Input = styled.input`
    width: 326px;
    height: 58px;
    padding-left: 8px;
    border-radius: 5px;
    border: 1px solid #0000CD;
    outline: 0;
   
    ::placeholder{
        color: #4169E1;
        font-family: 'Actor', sans-serif;
        font-size: 25px;
        line-height: 30px;
        font-weight: 400;
    }
`

const Button = styled.button`
    background-color: #0000CD;
    color: #fff;
    width: 326px;
    height: 46px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    line-height: 23px;
    font-weight: 700;
    cursor: pointer;
`

const Form = styled.form`
    margin-top: 24px;
    margin-bottom: 22px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const StyledLink = styled(Link)`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 30px;
    color: #0000CD;
`

export { 
    Title, 
    Input, 
    Button,
    Form, 
    StyledLink 
}

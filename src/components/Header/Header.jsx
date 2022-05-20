import styled from "styled-components";
import {BiLogOut} from "react-icons/bi";

export default function Header(props){
    const {username, image} = props


    return (
        <ContainerTop>
            <Div>
                <Photo src={image} alt="foto do usuario"></Photo>
                <Title>Olá, {username}!!</Title>
            </Div>
            <Div>
                <BiLogOut color="#ffffff" size={35}/>
            </Div>
        </ContainerTop>
    )
}

const ContainerTop = styled.div`
    width: 100vw;
    height: 90px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #0000CD;

    padding: 15px;
`;

const Title = styled.h1`
    width: 200px;
    height: 30px;

    font-family: 'Roboto';
    font-size: 20px;

    display:flex;
    align-items: center;


    color: #ffffff;
`;

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 7px;
`;
const Photo = styled.img`
    width: 50px;
    height:50px;

    object-fit: cover;
    border-radius: 50%;
    border: 3px solid #ffffff;
`;

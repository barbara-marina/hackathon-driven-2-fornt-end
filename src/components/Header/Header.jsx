import styled from "styled-components";
import {BiLogOut} from "react-icons/bi";
import { useContext, useState, useEffect } from "react";
import UserContext from "./../../context/UserContext.jsx";
import axios from "axios";

export default function Header(){
    const {token} = useContext(UserContext);
    const [userData, setUserData] = useState([]);
    
    useEffect(() =>{
        const URL_User = `${process.env.REACT_APP_URL_API}/user`;
        const config = {headers: { Authorization: `Bearer ${token}`}};
        const request = axios.get(URL_User, config);

        request.then((response) => {
            console.log(response.data);
            setUserData(response.data)
        });
        request.catch(e => console.log("error", e));
        
    }, [token]);

    // function logOut(){
    //     const URL_LogOut = `${process.env.REACT_APP_URL_API}/log-out`;
    //     const request = axios.delete(URL_LogOut, config);
    // }
    
    return (
        <ContainerTop>
            <Div>
                <Photo src={userData.picture} alt="foto do usuario"></Photo>
                <Title>Olá, {userData.name}!!</Title>
            </Div>
            <Div>
                <BiLogOut color="#ffffff" size={35} />
                {/* onClick={logOut} */}
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
    position: fixed;
    top: 0;

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

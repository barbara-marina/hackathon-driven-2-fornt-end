import axios from "axios";

//const BASE_URL = 'http://localhost:5000';

function getConfig(token){
    return { headers: { Authorization: `Bearer ${token}` } };
}

function signIn(body){
    const promise = axios.post(`${process.env.REACT_APP_URL_API}/sign-in`, body);
    return promise;
}

function signUp(body){
    const promise = axios.post(`${process.env.REACT_APP_URL_API}/sign-up`, body);
    return promise;
}

const api = {
    signIn,
    signUp
}

export default api;

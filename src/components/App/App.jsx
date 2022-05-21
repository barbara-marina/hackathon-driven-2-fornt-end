import {BrowserRouter, Route, Routes} from "react-router-dom";
import { useState } from "react";
import UserContext from "../../context/UserContext.jsx";
import Home from "../Home/Home.jsx";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";

export default function App() {
    const [ token, setToken ] = useState("");

    return (
        <UserContext.Provider value={{token, setToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn/>}></Route>
                    <Route path="/sign-up" element={<SignUp/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

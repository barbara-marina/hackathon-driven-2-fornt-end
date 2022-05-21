import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "../Home/Home.jsx";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/sign-in" element={<SignIn/>}></Route>
                <Route path="/sign-up" element={<SignUp/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

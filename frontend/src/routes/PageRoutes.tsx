import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Home from "../pages/Home";

function PageRoutes() {
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default PageRoutes;
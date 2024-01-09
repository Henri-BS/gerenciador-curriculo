import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Home from "../pages/Home";
import { CvProfile } from "pages/CvProfile";

function PageRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cv" >
                    <Route path=":cvId" element={<CvProfile />} />
                </Route>
            </Routes>

        </BrowserRouter>
    );
}

export default PageRoutes;
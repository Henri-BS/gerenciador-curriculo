import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/CvList";
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
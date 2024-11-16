import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import "./style.css";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="*" element={<Home />} />
            </Routes>
        </main>
    );
};

export default Main;
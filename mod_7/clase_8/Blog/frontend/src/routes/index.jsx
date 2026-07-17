import { Routes, Route } from "react-router-dom";
import Post from "../pages/Post";
import App from "../App";

function RouterIndex() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            {/* Ruta para post */}
            <Route path="/post/:id" element={<Post />} />
        </Routes>
    );
}

export default RouterIndex;
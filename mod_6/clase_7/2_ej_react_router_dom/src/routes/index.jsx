import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Portfolio from "../components/Portfolio";
import Posts from "../components/Posts";
import About from "../components/About";
import SubPage from "../components/SubPage";
import AdminDashboard from "../components/AdminDashboard";
import UrlParams from "../components/DynamicRoutes/UrlParams";
import QueryParams from "../components/DynamicRoutes/QueryParams";
import HashParams from "../components/DynamicRoutes/HashParams";


// Paso 3. Definir las rutas
function RoutesIndex() {

    const isAdmin = false

    return (
        <Routes>
            {/* Rutas estáticas*/}
            <Route path="/" element={<Posts />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            {/* Rutas dinámicas */}
            <Route path="/urlParams/:name" element={<UrlParams />} />
            <Route path="/queryParams" element={<QueryParams />} />
            <Route path="/hashParams" element={<HashParams />} />
            {/* Varios niveles */}
            <Route path="/nivel1">
                <Route path="nivel2">
                    <Route path="nivel3" element={<SubPage />} />
                </Route>
            </Route>
            {/* Rutas protegidas */}
            <Route element={ isAdmin ? <Outlet /> : <Navigate to="/" />} >
                <Route path="/admin" element={<AdminDashboard />} />
            </Route>
        </Routes>
    )
}

export default RoutesIndex
import { useState } from "react";
import { createContext } from "react";

// Paso 2. Crear el Context
const AppContext = createContext()

// Paso 3. Crear Componente Provider
function LoginProvider({ children }) {
    const [loginName, setLoginName] = useState("")
    const [isLoggedIn, setIsloggedIn] = useState(false)

    function handleLogin() {
        setIsloggedIn(true)
        setLoginName("Mackaber")
    }

    function handleLogout() {
        setIsloggedIn(false)
    }

    return(
        // Paso 4. Envolver children con el Provider
        <AppContext.Provider value={{ 
                loginName, 
                setLoginName,
                isLoggedIn,
                setIsloggedIn,
                handleLogin,
                handleLogout
        }}>
            {children}
        </AppContext.Provider>
    )
}

// Paso 5. exportar Provider y AppContext
export { LoginProvider, AppContext }
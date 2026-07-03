import { useState } from "react";
import { createContext } from "react";

// Paso 2. Crear el Context
const AppContext = createContext()

// Paso 3. Crear Componente Provider
function Provider({ children }) {
    const [name, setName] = useState("")

    return(
        // Paso 4. Envolver children con el Provider
        <AppContext.Provider value={{ name, setName }}>
            {children}
        </AppContext.Provider>
    )
}

// Paso 5. exportar Provider y AppContext
export { Provider, AppContext }
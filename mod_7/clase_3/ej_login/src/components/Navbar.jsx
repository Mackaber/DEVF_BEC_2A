import { useContext } from "react"
import User from "./User"
import { AppContext } from "../contexts/LoginProvider"

function Navbar() {
    const { isLoggedIn, handleLogin } = useContext(AppContext)

    return (
        <nav>
            { isLoggedIn ?
                <User/> :
                <a href="#" onClick={handleLogin}>login</a>
            }
        </nav>
    )
}

export default Navbar
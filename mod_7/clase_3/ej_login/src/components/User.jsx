import { useContext } from "react"
import { useState } from "react"
import { AppContext } from "../contexts/LoginProvider"

function User() {
    const { loginName, handleLogout } = useContext(AppContext) 
    const [isClicked, setIsClicked] = useState(false) 

    function handleClick() {
        if(isClicked)
            setIsClicked(false)
        else
            setIsClicked(true)
    }


    return (
        <>
            <a href="#" onClick={handleClick}>{loginName}</a>
            { isClicked && <a className="logOut" href="" onClick={handleLogout}>logout</a>}
        </>
    )
}

export default User
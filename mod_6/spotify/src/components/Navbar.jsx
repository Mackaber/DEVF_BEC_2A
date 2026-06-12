import Logo from '../assets/spotify-logo.png';
import Avatar from '../assets/avatar.jpg';
import { useState } from 'react';

function Navbar() {
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <nav>
            <img id="logo" src={Logo} alt="Spotify Logo" />
            <div className="center-bar" >
                <div>
                    HOME
                </div>
                <div>
                    BUSCAR
                </div>
            </div>
            {
                loggedIn ? 
                <img id="avatar" src={Avatar} alt="User Avatar" /> :
                <a href='#' onClick={() => setLoggedIn(true)}>Log In</a>
            }
            
        </nav>
    );
}

export default Navbar;
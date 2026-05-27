import Logo from '../assets/Spotify_1.png'
import Avatar from '../assets/avatar.jpg'

const Navbar = (avatar) => {
    return  /* html */`
        <nav>
            <img id="logo" src="${Logo}"> 
            <div class="center-bar" >
                <div>
                    HOME
                </div>
                <div>
                    BUSCAR
                </div>
            </div>
            <img id="avatar" src="${Avatar}">
        </nav>
    `
}

export default Navbar
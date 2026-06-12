import { Routes, Route } from 'react-router-dom'
import Albums from '../pages/Albums'
import Playlists from '../pages/Playlists'
import Podcasts from '../pages/Podcasts'
import Home from '../pages/Home'
import Album from '../pages/Album'

function RouterIndex({addToPlaylist}) {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/albums/:id" element={<Album addToPlaylist={addToPlaylist} />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/podcasts" element={<Podcasts />} />
        </Routes>
    )
}

export default RouterIndex
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/playlists">Playlists</NavLink></li>
        <li><NavLink to="/albums">Albums</NavLink></li>
        <li><NavLink to="/podcasts">Podcasts</NavLink></li>
      </ul>
    </div>
  );
}

export default Sidebar;
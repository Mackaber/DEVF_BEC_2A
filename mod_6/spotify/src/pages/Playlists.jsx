function Playlists() {
  const tracks = JSON.parse(localStorage.getItem("playlist")) || []

  return (
    <div>
      <h1>Playlists</h1>
      <div className="trackList">
            {tracks.map(name => {
                return (
                    <div>
                        <p>{name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Playlists
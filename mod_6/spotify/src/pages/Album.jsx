import { useParams } from "react-router-dom"
import albums from '../data/albums'


function Album({addToPlaylist}) {
    const {id} = useParams()
    const album = albums.find((a) => a.id === Number(id))
    console.log(album)
    const {name, artist, year, image, tracks} = album

    return(
        <div>
            <h1>{name}</h1>
            <div className="albumFlex">
                <img src={image} alt={name} />
                <p>{artist} | {year}</p>
                <div className="trackList">
                    {tracks.map(({name, duration}) => {
                        return (
                            <div>
                                <p>{name}</p>
                                <p>{duration}</p>
                                <button 
                                    onClick={() => { addToPlaylist(name) }}
                                >+</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )

}

export default Album
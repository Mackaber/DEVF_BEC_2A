import { NavLink } from 'react-router-dom'
import Item from '../components/common/Item'
import albums from '../data/albums'

function Albums() {
  return (
    <div>
      <h1>Albums</h1>
      <div id="items">
      { albums.map(({ id, name, image, artist, year }) => {
        return (
        <NavLink to={`/albums/${id}`}>
            <Item 
                        key={id} 
                        id={id}
                        name={name} 
                        image={image} 
                        description={`${artist} | ${year}`} 
                    />
        </NavLink>
        )
      }) }
      </div>
    </div>
  )
}

export default Albums
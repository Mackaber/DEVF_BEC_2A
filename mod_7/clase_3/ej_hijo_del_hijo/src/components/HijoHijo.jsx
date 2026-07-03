import { useContext } from 'react'
import HijoHijoHijo from './HijoHijoHijo'
import { AppContext } from '../contexts/Provider'

function HijoHijo({loginName}) {
    const { name } = useContext(AppContext)

    return (
        <div className='cajita'>
            <h1>Hola soy el HijoHijo</h1>
            <HijoHijoHijo loginName={loginName}/>
            <h1>{name}</h1>
        </div>
    )
}

export default HijoHijo
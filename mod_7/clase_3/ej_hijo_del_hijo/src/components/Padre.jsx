import { useContext, useEffect, useState } from 'react'
import Hijo from './Hijo'
import { AppContext } from '../contexts/Provider'

function Padre() {
    const [loginName, setLoginName] = useState("")
    const { setName } = useContext(AppContext)

    useEffect(() => {
        function setup() {
            setLoginName("Mackaber")

            setName("Algo")
        }

        setup()
    },[])

  return (
    <div className='cajita'>
      <h1>Hola soy el padre</h1>
      <Hijo loginName={loginName}/>
    </div>
  )
}

export default Padre
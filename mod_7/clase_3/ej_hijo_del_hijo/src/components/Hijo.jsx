import HijoHijo from './HijoHijo'

function Hijo({loginName}) {
    return (
        <div className='cajita'>
            <h1>Hola soy el Hijo</h1>
            <HijoHijo loginName={loginName} />
        </div>
    )
}

export default Hijo
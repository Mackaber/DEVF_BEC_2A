function NombreProps (props) {
    return (
        <div>
            <h1>Hola {props.nombre}!</h1>
            <p>{JSON.stringify(props)}</p>
        </div>
    )
}

export default NombreProps
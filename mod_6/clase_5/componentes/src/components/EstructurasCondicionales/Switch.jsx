function Switch({ color }) {
    switch(color) {
        case 'rojo':
            return (<p style={{color: 'red'}}>El color es rojo</p>)
        case 'verde':
            return (<p style={{color: 'green'}}>El color es verde</p>)
        case 'azul':
            return (<p style={{color: 'blue'}}>El color es azul</p>)
        default:
            return (<p style={{color: 'black'}}>No se ha seleccionado un color válido</p>)
    }
}

export default Switch
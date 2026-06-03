import { useState } from 'react'
import ConditionalIf from './EstructurasCondicionales/ConditionalIf'
import OpSingleLine from './EstructurasCondicionales/OpSingleLine'
import Switch from './EstructurasCondicionales/Switch'

function EstructurasCondicionales() {
    const [valor, setValor] = useState(false)
    const [color, setColor] = useState('rojo')

    function handleValorChange(e) {
        console.log(e)
        setValor(e.target.checked)
    }

    function handleColorChange(e) {
        setColor(e.target.value)
    }


    return (
        <>
            <div className='cajita'>
                <h1>Condicionales con If</h1>
                <ConditionalIf conditional={valor}/>
                <p>Valor <input type='checkbox' onChange={handleValorChange} /> </p>
            </div>
            <br />
            <div className='cajita'>
                <h1>Operadores de una sóla línea</h1>
                <OpSingleLine />
            </div>
            <br />
            <div className='cajita'>
                <h1>Switch</h1>
                <Switch color={color} />
                <select onChange={handleColorChange}>
                    <option value='rojo'>Rojo</option>
                    <option value='verde'>Verde</option>
                    <option value='azul'>Azul</option>
                </select>
            </div>
        </>
    )
}

export default EstructurasCondicionales
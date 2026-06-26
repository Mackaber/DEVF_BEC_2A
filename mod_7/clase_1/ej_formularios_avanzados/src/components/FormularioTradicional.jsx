import { useState } from "react"

function FormularioTradicional() {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')

    function handleSubmit(e) {

        console.log(`El valor de name es: ${name}`)
        console.log(`El valor de last name es: ${lastName}`)

        e.preventDefault()
    }


    return (
        <div className="cajita">
            <h2>Formulario tradicional</h2>
            <form onSubmit={handleSubmit}>
                Name: <input name='name' onChange={(e) => setName(e.target.value)} /><br />
                Last Name: <input name="lastName" onChange={(e) => setLastName(e.target.value)}/><br />
                <input type='submit' value='enviar' />
            </form>
        </div>
    )
}

export default FormularioTradicional
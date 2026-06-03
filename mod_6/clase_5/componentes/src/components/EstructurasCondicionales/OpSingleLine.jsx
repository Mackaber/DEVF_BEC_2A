import { useState } from "react"

function OpSingleLine() {
    const [conditionalAnd, setConditionalAnd] = useState(false) 
    const [conditionalOr, setConditionalOr] = useState(false) 
    const [conditionalTern, setConditionalTern] = useState(false)


    function handleConditionalAndChange(e) {
        setConditionalAnd(e.target.checked)
    }

    function handleConditionalOrChange(e) {
        setConditionalOr(e.target.checked)
    }

    function handleConditionalTernChange(e) {
        setConditionalTern(e.target.checked)
    }

    return (<>
        <p>
            Condicional con operadores lógicos && 
            <input type="checkbox" value={conditionalAnd} onChange={handleConditionalAndChange} />
        </p>

        <p>
            Condicional con operadores lógicos || 
            <input type="checkbox" value={conditionalOr} onChange={handleConditionalOrChange} />
        </p>

         <p>
           Condicional con operadore ternario ? :
            <input type="checkbox" value={conditionalTern} onChange={handleConditionalTernChange} />
        </p>


        <div>
            {conditionalAnd && <h1>Mostrar conditionalAnd</h1>}
            {conditionalOr || <h1>Mostrar conditionalOr</h1>}
            { <h1>Mostrar siempre</h1> || <h1>Mostrar nunca</h1>}

            {
                conditionalTern ? <h1>Mostrar conditionalTern</h1> : <h1>No mostrar conditionalTern</h1>
            }
        </div>
    </>)
}

export default OpSingleLine 
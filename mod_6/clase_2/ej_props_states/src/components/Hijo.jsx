function Hijo({handleObtenerPokemones, pokemones}) {


    return (
        <div>
            <button onClick={handleObtenerPokemones}>Obtener pokemones</button>
            {JSON.stringify(pokemones)}
        </div>
    )

}

export default Hijo
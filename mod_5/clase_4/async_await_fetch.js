// Async y Await

const main = async () => {

    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1") // GET
    const pokemon_json = await response.text()

    const pokemon = JSON.parse(pokemon_json)
    console.log(pokemon.results[0].name)
}

main()
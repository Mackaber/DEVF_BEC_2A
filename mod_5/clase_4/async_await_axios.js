const axios = require("axios")

const main = async () => {
    
    const pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1")
    console.log(pokemon.data.results[0].name)
}

main()
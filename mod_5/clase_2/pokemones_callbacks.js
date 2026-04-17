// Todos los pokemones
const obtenerTodosPokemones = () => {
fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0", {
  method: "GET",
  redirect: "follow"
})
  .then((response) => response.text())
  .then((result) => {
    
// {"count":1350,"next":"https://pokeapi.co/api/v2/pokemon?offset=150&limit=150","previous":null,"results":[{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},...]}
    const pokemones = JSON.parse(result)

    console.log(pokemones.count)

    pokemones.results.forEach(element => {
        obtenerInfoPokemon(element.url, (result) => {
            const pokemonDato = JSON.parse(result)
            console.log(pokemonDato.name)
            console.log(pokemonDato.weight)
            console.log("--------------------")
        });
    });

  })
  .catch((error) => console.error(error));
}

// Toda la info de uno solo
const obtenerInfoPokemon = (link, callback) => {
    fetch(link, {
    method: "GET",
    redirect: "follow"
    })
    .then((response) => response.text())
    .then((result) => {
        callback(result)
    })
    .catch((error) => console.error(error));
}

obtenerTodosPokemones()


const obtenerTodosPokemones = () => {
fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0", {
  method: "GET",
  redirect: "follow"
})
  .then((response) => response.text())
  .then((result) => {
    
// {"count":1350,"next":"https://pokeapi.co/api/v2/pokemon?offset=150&limit=150","previous":null,"results":[{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},...]}
    const pokemones = JSON.parse(result)

    console.log(pokemones.count)

    pokemones.results.forEach(element => {
        obtenerInfoPokemon(element.url, (result) => {
            const pokemonDato = JSON.parse(result)
            obtetenerJuegos(pokemonDato.juegos.url, (result) => {
                const juego = JSON.parse(result)
                obtenerIdiomas(juego.idiomas.url, (result) => {
                    const idioma = JSON.parse(result)
                    obtenerVariaciones(idioma, (result) => {
                        console.log(result)
                    })
                })
            })
        });
    });

    obtenerInfoPokemon = (link) => {
        return Promise(reject, resolve => {
            return resolve(fetch(link))
        })
    }


    pokemones.results.forEach(element => {
         obtenerInfoPokemon(element.url)
         .then((result) => obtetenerJuegos(JSON.parse(result)))
         .then((result) => obtenerIdiomas(JSON.parse(result)))
         .then((result) => obtenerVariaciones(JSON.parse(result)))
         .then((result) => console.log(result))
         .catch((error) => mostrarError(error))
    })








  })
  .catch((error) => console.error(error));
}
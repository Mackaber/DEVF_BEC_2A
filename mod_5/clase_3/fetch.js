// GET utilizando fetch

const requestOptions = {
    method: "GET"
}

//fetch(api_url, requestOptions)
//fetch(api_url, { method: "GET" })

// Sintaxis básica
fetch("https://pokeapi.co/api/v2/pokemon/1/") // La primer promesa (Por default, fetch interpreta que quiero hacer GET)
//.then(response => response.text()) // La segunda promesa
//.then(result => console.log(result)) // El resultado de la segunda promesa

console.log("----------------------------------")

// Manejo de errores
fetch("https://pokeapi.co/api/v2/pokemones/1/") // La primer promesa
.then(response => response.text()) // La segunda promesa
.then(result => {
    pokemon = JSON.parse(result)
    console.log(pokemon.name)
}) // El resultado de la segunda promesa
.catch(error => console.log(`Ocurrió un error: ${error}`))

console.log("----------------------------------")


fetch("https://pokeapi.co/api/v2/pokemon/1/") // La primer promesa
.then(response => response.text()) // La segunda promesa
.then(result => {
    pokemon = JSON.parse(result)
    console.log(pokemon.name)
}) // El resultado de la segunda promesa
.catch(error => console.log(`Ocurrió un error: ${error}`))


// Haciendo POST

const producto = {
    ID: "3",
    Product: "Desk",
    Price: "1200",
    Qty: "4"
}

const headers = new Headers();
headers.append("Content-Type", "application/json");
console.log(headers)

const producto_json = JSON.stringify(producto)

fetch("https://sheetdb.io/api/v1/vudlx107qfq4j", { method: "POST", body: producto_json, headers: headers })
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log(`Ocurrió un error: ${error}`))

// POST pero con errores

fetch("https://sheetdb.io/api/v1/vudlx107qfq4jk", { method: "POST", body: producto_json, headers: headers })
.then(response => response.text())
.then(result => {
    const r = JSON.parse(result)
    console.log(r.created.a)
})
.catch(error => console.log(`Ocurrió un error: ${error}`))

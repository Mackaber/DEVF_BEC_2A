// Para poderla utilizar necesito primero hacer
// npm init -y
// npm install axios

const axios = require("axios")

// GET con Axios

axios.get("https://pokeapi.co/api/v2/pokemon/1/")
.then(response => console.log(response.data))

const producto = {
    ID: "3",
    Product: "Desk",
    Price: "1200",
    Qty: "4"
}

// POST con Axios

axios.post("https://sheetdb.io/api/v1/vudlx107qfq4j", producto)
.then(response => console.log(response.data))
const express = require('express') // commonJS
const axios = require('axios') // commonJS
const app = express()

app.use(express.json()) // middleware

app.get("/games", (request, response) => {
   return axios.get("https://ftbtwdeneslhqajcffnx.supabase.co/rest/v1/Developers")
})

app.listen(3000, () => {
    console.log("ej_express corriendo en el puerto 3000")
})
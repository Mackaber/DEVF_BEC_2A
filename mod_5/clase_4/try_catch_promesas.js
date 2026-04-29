const axios = require("axios")

const main = async () => {
    try {
        let result

        result = await axios.get("https://httpbin.org/uuid")
        console.log(result.data)

        result = await axios.get("https://httpbin.org/uuid")
        console.log(result.data)

        result = await axios.get("https://httpbin.org/uuid")
        console.log(result.data)
        
        result = await axios.get("https://httpbin.org/uuid")
        console.log(result.data)

        result = await axios.get("https://httpbin.org/uuid")
        console.log(result.data)

        result = await axios.get("https://httpbin.org/status/400")
        console.log(result.data)

        result = await axios.get("https://httpbin.org/status/500")
        console.log(result.data)

    } catch(error) {
        console.log(error.code)

        console.error("Hubo un error")
    }
}

main()
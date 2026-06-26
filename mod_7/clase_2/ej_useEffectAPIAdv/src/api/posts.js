const API_ENDPOINT = "https://jsonplaceholder.typicode.com"

async function fetchPosts() {
    const response = await fetch(`${API_ENDPOINT}/posts`)
    const data = await response.json() // Extraigo el json de response se se parsea como Objeto
    console.log(data)

    return data
}

async function fetchPost(id) {
    const response = await fetch(`${API_ENDPOINT}/posts/${id}`)
    const data = await response.json() // Extraigo el json de response se se parsea como Objeto
    console.log(data)

    return data
}

export { fetchPosts, fetchPost }
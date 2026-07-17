const ENDPOINT = 'http://localhost:3000'

import axios from 'axios'

// Metodos CRUD para posts

// Obtener todos los posts
function getPosts() {
    return axios.get(`${ENDPOINT}/posts`)
}

// Obtener un post por id
function getPostById(id) {
    return axios.get(`${ENDPOINT}/posts/${id}`)
}

// Crear un post

function createPost(post) {
    return axios.post(`${ENDPOINT}/posts`, post)
}

// Actualizar un post
function updatePost(id, post) {
    return axios.put(`${ENDPOINT}/posts/${id}`, post)
}

// Eliminar un post
function deletePost(id) {
    return axios.delete(`${ENDPOINT}/posts/${id}`)
}

export { getPosts, getPostById, createPost, updatePost, deletePost }
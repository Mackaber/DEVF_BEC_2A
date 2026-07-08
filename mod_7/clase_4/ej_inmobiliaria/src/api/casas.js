import { default as axios } from 'axios';

const API_ENDPOINT = "https://crudcrud.com/api/f9c785d00e1e426189e2afa17a30df44"

// CREAR CASA
function createHouse(house) {
    return axios.post(`${API_ENDPOINT}/casas`, house)
}

// OBTENER TODAS LAS CASA
function getAllHouses() {
    return axios.get(`${API_ENDPOINT}/casas`)
}

// OBTENER CASA CON ID
function getHouse(id) {
    return axios.get(`${API_ENDPOINT}/casas/${id}`)
}

// MODIFICAR CASA CON ID
function modifyHouse(id, house) {
    return axios.put(`${API_ENDPOINT}/casas/${id}`, house)
}

// BORRAR CASA CON ID
function deleteHouse(id) {
    return axios.delete(`${API_ENDPOINT}/casas/${id}`)
}

export { createHouse, getAllHouses, getHouse, modifyHouse, deleteHouse }
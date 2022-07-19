import axios from 'axios' ;

const URL = 'http://localhost:3001';

export const addItems = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data);
    } catch(err) {
        console.log('Error while calling add Items Api', err);
    }
}

export const getItems = async () => {
    try {
        return await axios.get(`${URL}/all`);
    } catch(err) {
        console.log('Error while calling get Items Api', err);
    }
}

export const getItem = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`);
    } catch (err) {
        console.log ("Error while calling getItem api", err);
    }
}

export const updateItem = async (item, id) => {
    try {
        return await axios.put(`${URL}/${id}`, item);
    } catch (err) {
        console.log("Error while calling updateUser Api", err);
    }
}

export const deleteItem = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`);
    } catch (err) {
        console.log("Error while calling deleteItem Api", err);
    }
}
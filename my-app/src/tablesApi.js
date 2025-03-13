import axios from 'axios';

const API_URL = 'http://localhost:8080/api/tables';

export const getAllTables = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addTable = async (table) => {
    const response = await axios.post(API_URL, table);
    return response.data;
};

export const deleteTable = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};

export const updateTable = async (id, updatedTable) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedTable);
    return response.data;
};


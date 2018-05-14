import axios from 'axios';
const addr = process.env.REACT_APP_RECORDS_API_ADDR || 'http://localhost:5000';

export function getAll() {
    return axios.get(`${addr}/api/v1/records`);
}

export function create(data) {
    return axios.post(`${addr}/api/v1/records`, data);
}

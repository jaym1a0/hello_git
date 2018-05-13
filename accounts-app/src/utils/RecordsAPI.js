import axios from 'axios';
const addr = process.env.REACT_APP_RECORDS_API_ADDR || 'http://localhost:5000';

export function getAll() {
    return axios.get(`${addr}/api/v1/records`)
}



import axios from 'axios';

export const key = "3241aced8e7b13a287d3c49a15a70896b295455d"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;
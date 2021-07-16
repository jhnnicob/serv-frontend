import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/user';

export function getAdminBoard() {
    return axios.get(API_URL + 'admin', {headers: authHeader});
}


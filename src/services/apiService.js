import http from "../http-common";
import authHeader from './auth-header';

const signup = (url, username, email, password) => {
    return http.post(url, {
        username, email, password
    });
}   

const signin = (url, username, password) => {
    return http.post(url, {
        username, password
    });
}   

const getAll = (url) => {
    return http.get(`${url}`, {headers: authHeader()});
}

const get = (id, url) => {
    return http.get(`${url}/${id}`);
}


export default {
    getAll,
    get,
    signup,
    signin
}
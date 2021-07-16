import axios from "axios";

const API_URL = "http://localhost:8080/api/user/auth/";

export function signin(username, password) {
    return axios
        .post(API_URL + "signin", {
            username,
            password
        })
        .then(response => {
            if(response.data) {
                localStorage.setItem("token", JSON.stringify(response.data));
            }
            return response.data;
        })

}

export function logout() {
    localStorage.removeItem("user");
}

export function signup(username, email, password) {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password
    });
}

export function getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
}


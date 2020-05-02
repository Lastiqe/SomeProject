import *as axios from "axios";

export const getData = (page, limit) => {
    return axios.get(`http://localhost:4000/users?page=${page}&limit=${limit}`)
}
import *as axios from "axios";
export const getData = (page, limit, sortType, sortOrder) => {
    return axios.get(`http://localhost:4000/users?page=${page}&limit=${limit}&sortType=${sortType}&sortOrder=${sortOrder}`)
}
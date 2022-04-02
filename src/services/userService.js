import axios from "../axios";

const handleLoginApi = (email , password) =>{
    return axios.post('api/login',{email,password});
}

const getAllUsers = (id) =>{
    return axios.get(`api/get-all-user?id=${id}`);
}

export {
    handleLoginApi,
    getAllUsers
}
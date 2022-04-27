import axios from "../axios";

const handleLoginApi = (email , password) =>{
    return axios.post('api/login',{email,password});
}

const getAllUsers = (id) =>{
    return axios.get(`api/get-all-user?id=${id}`);
}

const addNewUserService = (data) =>{
    return axios.post(`/api/create-new-user`,data);
}

const deleteUserService = (id) =>{
    // return axios.delete(`/api/delete-user`,{id});
    return axios.delete('/api/delete-user', {
        // headers: {
        //   Authorization: authorizationToken
        // },
        data: {
          id: id
        }
      });
}
export {
    handleLoginApi,
    getAllUsers,
    addNewUserService,
    deleteUserService
}
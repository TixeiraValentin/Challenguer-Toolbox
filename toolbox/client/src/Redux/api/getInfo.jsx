import apiInstance from "./index";

export const getInfo = (params) => {
    return apiInstance.get('/files/data', params)
    .then(res =>{
            return res;
    })
    .catch(error => {
        console.error(error);
        throw error
    });
}
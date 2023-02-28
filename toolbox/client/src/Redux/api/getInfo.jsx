import apiInstance from "./index";

export const getInfo = (params) => {
    return apiInstance.get('/files/list', params)
    .then(res =>{
            return res;
    })
    .catch(error => {
        console.error(error);
        throw error
    });
}

export const getInfoByName = (params) => {
    let queryString = '';
    if (params) {
      queryString = '?fileName=' + encodeURIComponent(params);
    }
    return apiInstance.get(`/files/data${queryString}`)
      .then(res => {
        return res;
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  };
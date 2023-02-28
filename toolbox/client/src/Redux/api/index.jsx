const BASE_URL = "http://localhost:3001"

const apiInstance = {
    get: (url, options = {}) => {
      return fetch(BASE_URL + url, {
        ...options,
        method: "GET"
      }).then(response => response.json());
    },
    post: (url, data = {}, options = {}) => {
      return fetch(BASE_URL + url, {
        ...options,
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      }).then(response => response.json());
    }
  };
  
  export default apiInstance;
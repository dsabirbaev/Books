

import api from "../axious";

const headers =  {
    "Content-Type": "application/json",
}

const userAPI = {
    register: (data: object) => api.post('/signup', data),
    getUser: () => api.get('/myself', {headers}),
}

export default userAPI;
import axios from "axios";

axios.defaults.baseURL = "https://rate-my-car-api-deed71afb45e.herokuapp.com/"
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;
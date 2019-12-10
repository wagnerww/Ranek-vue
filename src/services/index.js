import axios from "axios";

const axiosInstace = axios.create({
  baseURL: "http://localhost:3333"
});

export const api = {
  get(endpoint) {
    return axiosInstace.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstace.post(endpoint, body);
  }
};

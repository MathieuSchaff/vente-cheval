// utils/apiClient.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true, // Send cookies along with requests
});

export default apiClient;
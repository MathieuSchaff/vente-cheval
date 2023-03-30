// utils/auth.ts
import apiClient from './apiClient';
// axios response type
import { AxiosResponse } from 'axios';
interface LoginResponse {
  success: boolean;
  message: string;
}

export async function loginUser(email: string, password: string): Promise<LoginResponse> {
    // The function attempts to make a POST request to the /api/login endpoint using the apiClient instance (Axios)
  try {
    const response = await apiClient.post('/api/login', { email, password });
    console.log(response);
     if(response.status === 200 && response.data.token !== ""){
        return { success: true, message: response.data.token };
     }else{
        throw new Error(response.data.message);
     }
    
  } catch (error) {
    return { success: false, message:  'Something went wrong' };
  }
}
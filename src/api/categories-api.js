import axios from "axios";
import { getToken } from "../utils/token-storage";

export const getCategories=async()=>{
    const response=await axios.get("https://test-backend.abdulrahman-hares.com/api/categories");
    return response.data
}
export const addCategory=async(productData)=>{
    const token = getToken();
    const response=await axios.post(`https://test-backend.abdulrahman-hares.com/api/categories`,productData,{headers:{
       Authorization: `Bearer ${token}`, 
    }});
    return response.data
}

export const deleteCategory=async(id)=>{
    const response= await axios.delete(`https://test-backend.abdulrahman-hares.com/api/categories/${id}`,{
        headers:{
            Authorization: `Bearer ${getToken()}`
        }
    })
    return response.data
}
import axios from "axios";

export const getCategories=async()=>{
    const response=await axios.get("https://test-backend.abdulrahman-hares.com/api/categories");
    return response.data
}
export const addCategories=async(id)=>{
    const response=await axios.post(`https://test-backend.abdulrahman-hares.com/api/categories/${id}`,{headers:{
        
    }});
    return response.data
}
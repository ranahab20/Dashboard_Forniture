import {useQuery,useQueryClient,useMutation} from "@tanstack/react-query"
import { addCategory, deleteCategory, getCategories } from "../api/categories-api"

export const useGetCategories=()=>{
    return useQuery({
        queryKey:["categories"],
        queryFn:getCategories
    });
}
export const useAddCategory=()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:addCategory,
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["categories"]});
        }
    })
}

export const useDeleteCategory=()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:deleteCategory,
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["categories"]});
        }
    })
}
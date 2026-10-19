import {useQuery,useQueryClient,useMutation} from "@tanstack/react-query"
import { getCategories } from "../api/categories-api"

export const useGetCategories=()=>{
    return useQuery({
        queryKey:["categories"],
        queryFn:getCategories
    });
}
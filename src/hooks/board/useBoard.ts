import { useQuery } from "@tanstack/react-query"
import { Boards } from "../../types/Board"
import axios from "axios"
const foApiUrl = 'http://158.179.167.148:3001/api/v1/crud';
export const useBoardData = () =>{
    return useQuery<Boards>({
        queryKey:['boards'],
        queryFn: async() => {
            const response = await axios.get<{data: Boards}>(foApiUrl);
                return response.data.data
        }
    })
}
import axios, {AxiosError, AxiosResponse} from "axios";
import {useQuery, UseQueryResult} from "react-query";
import {IPost} from "../types/IPost";

const getPosts = async (): Promise<IPost[]> => {
    const api = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return api.data
}
const getPosts2 =  (): Promise<AxiosResponse<IPost[]>> =>  axios.get('https://jsonplaceholder.typicode.com/posts')

export const usePosts = (): UseQueryResult<AxiosResponse<IPost[]>, AxiosError> => {
    return useQuery({
        queryKey: ['getPosts'],
        queryFn: getPosts2,
    })
}
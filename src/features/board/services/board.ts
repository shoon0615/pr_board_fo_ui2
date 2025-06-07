import { instance as axios } from '@/shared/services';
import { withDefaults } from '@/shared/utils/dataUtil';
import { Boards, Board } from '@/features/board/types/board';

const apiMapping = '/crud';

export const getAllBoards = async () => {
    // const response = await axios.get(`${apiMapping}`);
    const response = await axios.get(`${apiMapping}`);
    return response.data;
};

interface BoardParams {
    page?: number;
    column1?: string;
}
export const getBoards = async (param: BoardParams = {}) => {
    const params = withDefaults(param, { page: 1 });
    const response = await axios.get(`${apiMapping}/page`, {
        params: params,
        /* paramsSerializer: (params) => {
            return new URLSearchParams(params).toString();
        }, */
    });
    return response.data;
};

export const getBoard = async (id: string | undefined) => {
    if (!id) {
        throw new Error('Board ID is required');
    }
    // const { data } = await axios.get<{ data: Boards }>(`${apiMapping}/${id}`);
    const { data } = await axios.get(`${apiMapping}/${id}`);
    return data;
};

/* export const getBoard = async (id: string) => {
    const title = await axios.get<{ data: Boards }>(`${apiMapping}/${id}`).then(res => res.data.data[0].title);
    return title;
}; */

// export const addBoard = async (param: BoardParams = {}) => {
// export const addBoard = async ({ param }: { param: string }) => {
// export const addBoard = async (param: BoardParams) => {
export const addBoard = async (param: any) => {
    // const params = withDefaults({}, { page: 1 });
    // const response = await axios.post<BoardParams>(`${apiMapping}`, params);
    const response = await axios.post(`${apiMapping}`, param);
    return response.data;
};

export const editBoard = async (id: string, params: any = {}) => {
    const response = await axios.put(`${apiMapping}/${id}`, params);
    return response.data;
};

export const removeBoard = async (id: string) => {
    const response = await axios.delete(`${apiMapping}/${id}`);
    return response.data;
};

export default axios;
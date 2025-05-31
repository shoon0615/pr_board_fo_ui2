import { instance as axios } from '@/shared/services';
import { withDefaults } from '@/shared/utils/dataUtil';

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
    const { data } = await axios.get(`${apiMapping}/${id}`);
    return data;
};

/* export const getBoard = async (id: string) => {
    const title = await axios.get<{ data: Boards }>(`${apiMapping}/${id}`).then(res => res.data.data[0].title);
    return title;
}; */

export default axios;
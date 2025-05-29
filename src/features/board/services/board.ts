import { instance as axios } from '@/shared/services';
// import { Boards } from '../types/board';
import { Boards } from '@/features/board/types/board';

const apiMapping = '/crud';

export const getBoards = async () => {
    const response = await axios.get(`${apiMapping}`);
    return response.data;
};

export const getBoard = async (id: string | undefined) => {
    if (!id) {
        throw new Error('Board ID is required');
    }
    const { data } = await axios.get<{ data: Boards }>(`${apiMapping}/${id}`);
    return data;
};

/* export const getBoard = async (id: string) => {
    const title = await axios.get<{ data: Boards }>(`${apiMapping}/${id}`).then(res => res.data.data[0].title);
    return title;
}; */

export default axios;
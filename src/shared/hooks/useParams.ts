import { useParams, } from 'react-router-dom';

export const useParamsId = () => {
    const { id } = useParams();

    if (typeof id !== 'string') {
        throw new Error('id가 존재하지 않습니다.');
    }

    return id;
};

export const useParamsIdOrElse = (other?: any) => {
    const { id } = useParams();
    return id ?? other;
};
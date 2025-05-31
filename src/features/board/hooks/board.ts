import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { getBoards, getBoard } from '@/features/board/services/board';
import { Boards, Board } from '@/features/board/types/board';
// import * as Data from '@/shared/utils/dataUtil';    // Data.withDefaults
import { withDefaults } from '@/shared/utils/dataUtil';

const apiMapping = '/crud';

interface BoardRequest {
    page?: number;
    column1?: string;
}

interface BoardResponse {
    data: Boards;
    pagination: any;
}

/* export const useQueryBoards = useSuspenseQuery({
    queryKey: ['boardList'],
    queryFn: () => getBoardsApi({ page: 1 }),
    select: (data: { data: { data: Boards, pagination: any }}) => data?.data,
}); */

export const useQueryBoards = (param: BoardRequest = {}) => {
    const params = withDefaults(param, { page: 1 });
    // return useSuspenseQuery({
    const { data, refetch } = useSuspenseQuery({
        queryKey: ['boardList'],
        // queryFn: () => getBoardsApi(params),
        // queryFn: () => getBoards({ page: 2 }),
        queryFn: () => getBoards(params),
        select: (data: { data: BoardResponse}) => data?.data,
    });
    refetch();      // TODO: 임시 페이징 -> 추후 캐싱 설정 필요
    return data;
};

// TODO: 정리
/* const { data, isLoading, refetch } = useQuery({
    queryKey: ['boardDetail'],
    queryFn: () => getBoard(id),
    // select: (data: any) => data.map((data: any) => ({ ...data, id: data.crud_id }))
    // select: (data: any) => data.filter((data: any) => data.crud_id === 8)

    // select: boardData => {
    //     const result = boardData?.data as Boards;
    //     return result[0];
    // },
    // select: (boardData): { data: Boards } => boardData,

    select: (boardData: { data: Boards }) => {
        const result = boardData?.data[0];
        return result;
    },
}); */
// const boardData = Data.getData(data);

/* const { data } = useSuspenseQuery<{ data: Boards }>({
    queryKey: ['boardDetail'],
    queryFn: () => getBoard(id),
}); */

export const useQueryBoard = () => {
    const { id } = useParams();

    if (typeof id !== 'string') {
        throw new Error('id가 존재하지 않습니다.');
    }

    const { data, refetch } = useSuspenseQuery({
        // queryKey: ['boardDetail', id],
        queryKey: ['boardDetail'],
        queryFn: () => getBoard(id),
        // enabled: !!id, // id가 있을 때만 실행되도록 (optional)
        select: (boardData: { data: Boards }) => {
            const result = boardData?.data[0];
            return result;
        },
    });
    refetch();      // TODO: 임시 페이징 -> 추후 캐싱 설정 필요
    return data;
};
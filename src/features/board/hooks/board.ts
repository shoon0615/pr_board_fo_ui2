import { useQuery, useQueryClient, queryOptions, useSuspenseQuery, useMutation, } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';

import { getBoards, getBoard, addBoard, editBoard, removeBoard } from '@/features/board/services/board';
import { Boards, Board } from '@/features/board/types/board';
// import * as Data from '@/shared/utils/dataUtil';    // Data.withDefaults
import { withDefaults } from '@/shared/utils/dataUtil';

// import { BaseType } from '@/shared/types';
// interface BoardSearchCondition extends BaseType {
interface BoardSearchCondition {
    page?: number;
    column1?: string;
}

/* interface BoardRequest {
    column1: string;
    column2?: string;
} */

interface BoardResponse {
    data: Boards;
    pagination: any;
}

/* export const useQueryBoards = useSuspenseQuery({
    queryKey: ['boardList'],
    queryFn: () => getBoardsApi({ page: 1 }),
    select: (data: { data: { data: Boards, pagination: any }}) => data?.data,
}); */

export const useQueryBoards = (param: BoardSearchCondition = {}) => {
    // param.page = param.page ?? 1;
    const params = withDefaults(param, { page: 1 });
    // return useSuspenseQuery({
    const { data, refetch } = useSuspenseQuery({
        queryKey: ['boardList'],
        // queryFn: () => getBoardsApi(params),
        // queryFn: () => getBoards({ page: 2 }),
        queryFn: () => getBoards(params),
        select: (data: { data: BoardResponse }) => data?.data,
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

// 외부에서 Type 을 받는 경우
/* export const useQueryBoard = <T>(id: string) => (
    const { data } = useSuspenseQuery({ */

export const useQueryBoard = (id: string) => {
    const { data } = useSuspenseQuery({
    // const { data, refetch } = useQuery({
        // queryKey: ['boardDetail', id],
        queryKey: ['boardDetail'],
        queryFn: () => getBoard(id),
        // enabled: !!id, // id가 있을 때만 실행되도록 (optional)
        /* select: (boardData: { data: Boards }) => {
            const result = boardData?.data[0];
            return result;
        }, */
        select: (boardData: { data: Boards }) => boardData?.data[0],
        // select: (data) => data?.data[0],
        refetchOnMount: 'always',
    });
    return data;
};

export const useAddBoard = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: addBoard,
        onSuccess(res) {
            const { success, error } = res;
            if (success) {
                alert('성공했습니다.');
                navigate('/board/list');
            } else if (error) {
                throw new Error(error);
            }
        },
        onError(err) {
            console.log(err);
            alert('오류가 발생했습니다.');
        },
        retry: 3,
        retryDelay: 500,
    });
}

/* type SchemaType = z.infer<typeof schema>;
const editBoard = ({
    data,
}: {
    data: BoardRequest;
}): Promise<BoardResponse> => {
    return addBoard(data);
};
export const editBoard = (data: BoardRequest): Promise<BoardResponse> => {
    return addBoard(data);
}; */

/* export const useEditBoard = () => {
    const { id } = useParams();
    if (typeof id !== 'string') {
        throw new Error('id가 존재하지 않습니다.');
    } */
// export const useEditBoard = (id: string, param: BoardRequest = {}) => {
// export const useEditBoard = (id: string, param: any) => {
export const useEditBoard = (id: string) => {
    const navigate = useNavigate();

    return useMutation({
        // mutationFn: (data: Board) => getBoards(data),       // mutate(param) 시 인자 자동 호출
        // mutationFn: () => editBoard(id, param),  // [X] api 와 인자가 동일한 경우, 생략 가능
        mutationFn: (param: any) => editBoard(id, param),   // 인자 하나인 경우만 가능
        // onMutate: async newUser => {    // 낙관적 업데이트(동작 응답 이전에 미리 UI를 업데이트) -> 현재 화면에선 필요없음(ex: 장바구니, 그리드)
        // onSuccess(boardData: { success: boolean, data: Boards, error?: string }) {
        onSuccess(data: any, variables: any, context: unknown) {
        // onSuccess(res) {
            const { success, error } = data;
            // success && alert('성공했습니다.');
            if (success) {
                alert('성공했습니다.');
                // methods.reset(variables);    // useEffect[isSuccess] 에서 진행
                navigate('/board/list');
            } else if (error) {     // 통신 성공, api(결과) 에서 실패
                throw new Error(error);
            }
        },
        onError(err) {  // 바로 발생한다면, 통신 실패
            console.log(err);
            alert('오류가 발생했습니다.');  // 사용자에겐 api 결과 미전달
        },
        retry: 3,           // 변이 실패 시 3번 재시도
        retryDelay: 500,    // 0.5초 간격으로 재시도
    });
}

export const useRemoveBoard = (id: string) => {
    const navigate = useNavigate();
    
    return useMutation({
        mutationFn: removeBoard,
        onSuccess(res) {
            const { success, error } = res;
            if (success) {
                alert('성공했습니다.');
                navigate('/board/list');
            } else if (error) {
                throw new Error(error);
            }
        },
        onError(err) {
            console.log(err);
            alert('오류가 발생했습니다.');
        },
        retry: 3,
        retryDelay: 500,
    });
}
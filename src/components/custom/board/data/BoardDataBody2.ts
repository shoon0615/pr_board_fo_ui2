import React, { useState, useCallback } from 'react';
import { GridRowsProp } from '@mui/x-data-grid';
import { useQuery, useQueryClient, queryOptions } from '@tanstack/react-query';
import axios from 'axios';

// TODO: 추후 분리 예정
export type Boards = Board[];
export interface Board {
    id?: string;
    title: string;
    contents: string;
};

// TODO: redux || yml 에서 가져올 예정
const boApiUrl = 'http://localhost:8091/api/v1/crud';
const foApiUrl = 'http://localhost:3001/api/v1/crud';

const { data, isFetching, isPending, isLoading } = useQuery<Boards>({
    queryKey: ['boards'],
    /* queryFn: async () => {
        const res = await fetch(url);
        const json = await res.json();
        return json.users;
    }, */
    queryFn: async () => await axios.get(foApiUrl),
});

// (안됨) "useQuery" cannot be called at the top level -> 하단 로직으로 바꾸고 App 에서 가져와야함
export const rows: GridRowsProp = data ?? [];

// TODO: 추후 적용 예정
/**
 * useQueryClient
 *  - getQueryData : 새로운 데이터가 아닌 이미 캐시된 데이터만 반환
 *  - fetchQuery : 만료되면 새로운 데이터, 유지 중이면 캐시된 데이터 반환(단, queryFn 는 생략 가능하나 queryKey 와 staleTime 는 기존과 동일하게 제공 필요)
 */
const queryClient = useQueryClient();

const queryOption = queryOptions({
    queryKey: ['boards'],
    queryFn: async () => await axios.get(foApiUrl),
    staleTime: 1000 * 60 * 5,    // 5분 캐싱
});

const queryData = useCallback(async () => {
    // const data = queryClient.getQueryData(['boards']);   // 캐시된 데이터
    const data = await queryClient.fetchQuery(queryOption); // 캐시된 데이터 | 새로운 데이터
    console.log('data', data);
}, [queryClient]);

// <button onClick={() => queryData()}>data 반환</button>
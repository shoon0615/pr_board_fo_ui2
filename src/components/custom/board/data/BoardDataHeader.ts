import * as React from 'react';
import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
    {
        field: 'title',
        headerName: '제목',
        headerAlign: 'center',
        align: 'center',
        flex: 1.5,
        minWidth: 100,
    },
    {
        field: 'contents',
        headerName: '내용',
        headerAlign: 'center',
        align: 'center',
        flex: 1.5,
        minWidth: 200,
    },
];

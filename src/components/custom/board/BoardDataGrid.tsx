import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';

// TODO: 임시 -> 분리 예정
import { columns, rows, Boards } from './data';
import { GridRowsProp } from '@mui/x-data-grid';
import axios from 'axios';

import { useQuery } from '@tanstack/react-query';

/** TODO: 추후 작업?? */
// export default function BoardDataGrid({ children }) {     // children: Outlet
export default function BoardDataGrid() {
    const { bdId } = useParams();
    console.log('bdId:', bdId);

    const boApiUrl = 'http://localhost:8091/api/v1/crud';
    const foApiUrl = 'http://localhost:3001/api/v1/crud';
    const proxyUrl = '/api/v1/crud';

    const { data, isLoading } = useQuery<Boards>({
        queryKey: ['boards'],
        // queryFn: async () => (await axios.get<Boards>(foApiUrl)).data,
        queryFn: async () => (await axios.get<{ data: Boards }>(foApiUrl)).data.data,   // 렌더링 발생
        // queryFn: async () => 
        //     await axios.get<{ data: Boards }>(foApiUrl)
        //         .then(res => { const data = res.data?.data?.map((data: any) => ({ ...data, id: data.crud_id })); console.log('data', data); return data; })
        // enabled: !!bdId,
        enabled: bdId == '2' ? true : false,
        // select: (data: Boards) => data.map((data: Board) => ({ ...data })),
        // select: data => data.map((data, index) => ({ ...data, id: index })),
        select: (data: any) => data.map((data: any) => ({ ...data, id: data.crud_id }))
    });

    // const getData = async () => (await fetch(foApiUrl)).json();
    const getData = async () => (await axios.get<Boards>(foApiUrl)).data;

    const [testData, setTestData] = useState<GridRowsProp>([]);

    useEffect(() => {
        console.log('useEffect:', data);
        getData()
            // .then((data: any) => data?.data.map((d) => ({ ...d, id: d._id })))
            .then((response: any) => response?.data?.map((data: any, index: number) => ({ ...data, id: index })))
            // .then((data: GridRowsProp) => setTestData(data));
    }, []);

    return (
        <DataGrid
            autoHeight
            checkboxSelection
            // rows={rows}
            rows={data}
            columns={columns}
            getRowClassName={(params) =>
                params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
            }
            initialState={{
                pagination: { paginationModel: { pageSize: 20 } },
            }}
            pageSizeOptions={[10, 20, 50]}
            disableColumnResize
            density='compact'
            slotProps={{
                filterPanel: {
                    filterFormProps: {
                        logicOperatorInputProps: {
                            variant: 'outlined',
                            size: 'small',
                        },
                        columnInputProps: {
                            variant: 'outlined',
                            size: 'small',
                            sx: { mt: 'auto' },
                        },
                        operatorInputProps: {
                            variant: 'outlined',
                            size: 'small',
                            sx: { mt: 'auto' },
                        },
                        valueInputProps: {
                            InputComponentProps: {
                                variant: 'outlined',
                                size: 'small',
                            },
                        },
                    },
                },
            }}
        />
    );
}

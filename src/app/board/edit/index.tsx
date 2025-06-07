// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import {
    Box, Typography, Stack, Button, Checkbox,
    FormLabel, FormControl, FormGroup, FormControlLabel, 
} from '@mui/material';
import MuiLink from '@mui/material/Link';
// import * as S from "./styled";   // <S.Card />
import { StyledSignInContainer, StyledCard, StyledAntSwitch, BoardSaveWrapper as BoardEditWrapper, } from '@/app/board/save/styled';

import z from 'zod';
import { Form, FormInput, FormTextArea, FormComboBox, } from '@/shared/components/Form2';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParamsId, useParamsIdOrElse } from '@/shared/hooks/useParams';
import { useQueryBoard, useEditBoard } from "@/features/board/hooks/board";

export default function BoardCreate(props: { disableCustomTheme?: boolean }) {
    // import { Board } from '@/features/board/types/board';
    const schema = z.object({
        // title: z.string().min(1, '제목은 필수 입력입니다.').refine((value) => value.length >= 5 && value.length <= 10, '제목은 5~10자 사이여야 합니다.').default(''),
        title: z.string().min(1, '필수 입력입니다.'),
        contents: z.string().min(1, '필수 입력입니다.'),
        tags: z.array(
            z.string().min(1, '필수값 입니다.'),
        )
        .min(1, { message: '최소 1개 이상의 태그를 선택해야 합니다.' }),    // data 에 아예 컬럼 자체가 없으면 안탐(isDirty 후 반응)
    });

    const defaultValues = {
        title: '',
        contents: '',
        tags: [] as string[],
        // tags: [],
    }

    /** useForm() */
    const methods = useForm({ defaultValues, resolver: zodResolver(schema) });

    /** useMutation() */
    /* const { id } = useParams();
    if (typeof id !== 'string') {
        throw new Error('id가 존재하지 않습니다.');
    } */
    const id = useParamsId();
    // const submit = useEditBoard();
    const { mutate, error, isPending, isSuccess, isError, } = useEditBoard(id);

    /** [Edit] 최초 접속 시 -> Form 초기화(useQuery -> then(onSuccess) -> form.reset(data)) */
    const board = useQueryBoard(id);
    const [data, setData] = useState(board);
    // const data = useRef(board);     // ref.current
    useEffect(() => {
        if (data) {
            const convertData = Object.fromEntries(
                Object.entries(data)
                    .map(([key, value]) => [key, value ?? ''])
            );
            methods.reset(convertData);
        }
    // }, [board]);
    }, [data]);

    /** Submit 시 -> Form 초기화(onSubmit 에 금지!!) */
    /* useEffect(() => {
        methods.formState.isSubmitSuccessful && methods.reset();
        // methods.formState.isSubmitSuccessful && methods.reset(defaultValues);
    }, [methods.formState.isSubmitSuccessful]); */
    useEffect(() => {
        isSuccess && methods.reset(methods.getValues());
    }, [isSuccess]);

    /** Form 전송 -> Submit */
    type SchemaType = z.infer<typeof schema>;
    const onSubmit = (data: SchemaType) => {
        // console.log('data', data);
        // const convertValues = (data: SchemaType) => Object.fromEntries(
        const convertValues = Object.fromEntries(
            Object.entries(data)
                // .map(([key, value]) => [key, value === '' || (Array.isArray(value) && !value.length) ? null : value])
                .map(([key, value]) => [key, value === '' ? null : value])
        );
        console.log('data', convertValues);

        mutate(convertValues);
        // methods.setValue();
        // isSuccess && methods.reset(convertValues);  // [X] await 처럼 mutate 완료 후 진행 -> onSuccess 에 필요
    };

    /** Form Data 확인용 */
    const onClick = () => {
        console.log('formData', methods.getValues());
    };
    
    const category = ['카테고리1', '카테고리2', '카테고리3'];
        // .map((item, index) => ({ test: item, id: index + 1 }));
    
    return (
        <BoardEditWrapper>
            <Form
                onSubmit={onSubmit}
                form={methods}
                schema={schema}
                options={{ defaultValues }}
                // autoMode='create'
            >
                <FormInput name='title' defaultName='제목' />
                <FormTextArea name='contents' defaultName='내용' />
                <FormComboBox name='tags' defaultName='태그' options={category} disabled />
                {/* <FormControl component="fieldset">
                    <FormGroup row>
                        <FormControlLabel control={<Switch defaultChecked />} label="공개 여부" color="default" required />
                        <FormControlLabel sx={{ color: 'var(--template-palette-text-secondary)' }} control={<Switch defaultChecked />} label="공개 여부" />
                        <FormControlLabel sx={{ color: 'var(--template-palette-text-secondary)' }} control={<Switch />} label="댓글 허용 여부" />
                    </FormGroup>
                </FormControl> */}
                <FormControl
                    component="fieldset" 
                    sx={{ 
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 4, 
                        // justifyContent: 'center',
                        '& > *': {    // 모든 자식 요소에 적용
                            color: 'var(--template-palette-text-secondary)'
                        },
                        '& .MuiFormLabel-root.Mui-focused': {
                            color: 'var(--template-palette-text-secondary)'
                        },
                    }}
                >  
                    <FormGroup>
                        <FormLabel sx={{ fontWeight: 'bold' }}>공개</FormLabel>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                            <Typography>비공개</Typography>
                            <StyledAntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                            <Typography>공개</Typography>
                        </Stack>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel sx={{ fontWeight: 'bold' }}>댓글</FormLabel>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                            <Typography>비허용</Typography>
                            <StyledAntSwitch inputProps={{ 'aria-label': 'ant design' }} />
                            <Typography>허용</Typography>
                        </Stack>
                    </FormGroup>
                </FormControl>
                <FormControl>
                    <FormControlLabel
                        label="로그인 사용자만 댓글 허용"
                        control={
                            <Checkbox
                                // defaultChecked
                                sx={{
                                    borderColor: 'hsla(220, 20%, 80%, 0.4)',
                                    '&.Mui-checked, &.Mui-checked:hover': {
                                        borderColor: 'hsla(220, 20%, 80%, 0.4)',
                                        backgroundColor: 'var(--template-palette-common-onBackground)',
                                        opacity: 'var(--template-opacity-switchTrack)',
                                    },
                                    '&.MuiCheckbox-root:hover': {
                                        borderColor: 'hsla(220, 20%, 80%, 0.4)',
                                    },
                                }}
                            />
                        }
                        sx={{ color: 'var(--template-palette-text-secondary)'}}
                    />
                </FormControl>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {
                            xs: 'column-reverse',
                            sm: 'row',
                        },
                        alignItems: 'end',
                        flexGrow: 1,
                        gap: 1,
                        pb: { xs: 12, sm: 0 },
                        mt: { xs: 2, sm: 0 },
                        justifyContent: 'flex-end',
                    }}
                >
                    {/* <MuiLink
                        component='button'
                        type='button'
                        onClick={handleClickOpen}
                        variant='body2'
                        sx={{ alignSelf: 'center' }}
                    >Modal</MuiLink> */}
                    {/* <Link to={`/board/list`}> */}
                        <Button
                            type='submit'
                            variant='contained'
                            sx={{
                                width: {
                                    xs: '100%',
                                    sm: 'fit-content',
                                },
                            }}
                        >
                            {/* {autoMode === 'create' ? 'Create' : 'Edit'} */}
                            Save
                        </Button>
                    {/* </Link> */}
                    {/* <Button type='button' variant='contained' onClick={() => { console.log('formData', methods.getValues()); }}>Check</Button> */}
                    <Button type='button' variant='contained' onClick={onClick}>Check</Button>
                    <Button type='button' variant='contained' onClick={() => methods.reset()}>Reset</Button>
                </Box>
            </Form>
        </BoardEditWrapper>
    );
}

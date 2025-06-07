// import * as React from 'react';
import React, { ReactNode, useEffect } from 'react';
import {
    Box, Typography, Stack, Button, Checkbox,
    FormLabel, FormControl, FormGroup, FormControlLabel, 
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import MuiLink from '@mui/material/Link';
// import * as S from "./styled";   // <S.Card />
import { StyledSignInContainer, StyledCard, StyledAntSwitch, } from './styled';

import { useParams, Link } from 'react-router-dom';

import z from 'zod';
import { Form, FormInput, FormTextArea, FormComboBox, } from '@/shared/components/Form';

import { useParamsId } from '@/shared/hooks/useParams';
import { useQueryBoard } from '@/features/board/hooks/board';

const BoardSaveWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <Grid
            container
            sx={{
                height: {
                    xs: '100%',
                    // sm: 'calc(100dvh - var(--template-frame-height, 0px))',
                    sm: '100%',
                },
                mt: {
                    xs: 4,
                    sm: 0,
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    width: '100%',
                    minWidth: 600,
                    maxWidth: { sm: '100%', md: 600 },
                    // maxHeight: '720px',
                    gap: { xs: 5, md: 'none' },
                }}
            >
                {/* <Typography variant='h2'>게시판</Typography> */}
                <Typography
                    component='h1'
                    variant='h4'
                    sx={{
                        width: '100%',
                        fontSize: 'clamp(2rem, 10vw, 2.15rem)',
                    }}
                >
                    게시판
                </Typography>
                <StyledSignInContainer
                    direction='column'
                    justifyContent='space-between'
                >
                    <StyledCard variant='outlined'>
                        {children}
                    </StyledCard>
                </StyledSignInContainer>
            </Box>
        </Grid>
    );
};

export default function BoardSave(props: { disableCustomTheme?: boolean }) {
    /* const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        return;
    }; */

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
    // type SchemaType = z.infer<typeof schema>;

    const defaultValues = {
        title: '',
        contents: '',
        tags: [] as string[],
        // tags: [],
    }

    const convertDefaultValues = (data: any) => Object.fromEntries(
        Object.entries(data)
            // .map(([key, value]) => [key, value === '' || (Array.isArray(value) && !value.length) ? null : value])
            .map(([key, value]) => [key, value === '' ? null : value])
    );

    // const onSubmit: SubmitHandler<BoardResponse> = (data: object) => {
    // const onSubmit = (data: BoardResponse) => {
    const onSubmit = (data: any) => {
        // console.log('data', data);
        console.log('data', convertDefaultValues(data));
    };

    const category = ['카테고리1', '카테고리2', '카테고리3'];
        // .map((item, index) => ({ test: item, id: index + 1 }));

    // getBoard 가 await 라 useQuery 도 데이터 반환 후 Form 에 전달하나?? -> 일단 성공, 추후 과정 분석
    // import { useQueryBoard } from '@/features/board/hooks/board';
    // const { id } = useParams();
    const id = useParamsId();
    const data = useQueryBoard(id);
    
    if (!data) {
        return <div>Loading222</div>;
    }

    return (
        <BoardSaveWrapper>
            <Form
                onSubmit={onSubmit}
                schema={schema}
                options={{ defaultValues }}
                // autoMode='create'
                // {...(id && { data })}
                {...(data && { data })}
            >
                {({ control, formState: { errors }, getValues }) => (
                    <>
                    <FormInput name='title' defaultName='제목' />
                    <FormTextArea name='contents' defaultName='내용' />
                    <FormComboBox name='tags' defaultName='태그' options={category} />
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
                                Save
                            </Button>
                        {/* </Link> */}
                        <Button type='button' variant='contained' onClick={() => { console.log('formData', getValues()); }}>Check</Button>
                    </Box>
                </>
            )}
            </Form>
        </BoardSaveWrapper>
    );
}

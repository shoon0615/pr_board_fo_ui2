// import { useState } from 'react';
import * as React from 'react';
import {
    Box, Typography, Stack, FormLabel, FormControl, TextField, InputLabel, OutlinedInput, 
    Autocomplete, Button, Chip, FormGroup, FormControlLabel, Switch, Checkbox,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Tag, Clear } from '@mui/icons-material';

import { styled } from '@mui/material/styles';
import MuiCard from '@mui/material/Card';
import MuiLink from '@mui/material/Link';

import { useParams, Link } from 'react-router-dom';

import ForgotPassword from '@/features/member/components/sign-in/ForgotPassword';

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
    // height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
}));

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: '#1890ff',
                ...theme.applyStyles('dark', {
                    backgroundColor: '#177ddc',
                }),
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 12,
        height: 12,
        borderRadius: 6,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
        ...theme.applyStyles('dark', {
            backgroundColor: 'rgba(255,255,255,.35)',
        }),
    },
}));

export default function Checkout(props: { disableCustomTheme?: boolean }) {
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        return;
    };

    const { bdId } = useParams();
    console.log('bdId:', bdId);

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

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
                <div>
                    <Typography variant='h2'>게시판</Typography>
                </div>
                <SignInContainer
                    direction='column'
                    justifyContent='space-between'
                >
                    <Card variant='outlined'>
                        <Box
                            component='form'
                            onSubmit={handleSubmit}
                            noValidate
                            // autoComplete='off'
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%',
                                gap: 3,
                            }}
                        >
                            <FormControl>
                                <FormLabel htmlFor='title'>제목</FormLabel>
                                <TextField
                                    error={emailError}
                                    helperText={emailErrorMessage}
                                    id='title'
                                    name='title'
                                    placeholder='제목을 입력해주세요.'
                                    autoComplete='title'
                                    autoFocus
                                    required
                                    fullWidth
                                    variant='outlined'
                                    color={emailError ? 'error' : 'primary'}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor='contents'>내용</FormLabel>
                                {/* <InputLabel htmlFor='contents'>내용</InputLabel> */}
                                <OutlinedInput
                                    error={passwordError}
                                    // helperText={passwordErrorMessage}
                                    name='contents'
                                    placeholder='내용을 입력해주세요.'
                                    id='contents'
                                    autoComplete='current-contents'
                                    autoFocus
                                    required
                                    fullWidth
                                    color={passwordError ? 'error' : 'primary'}
                                    multiline
                                    rows={12}
                                    sx={{ height: 'auto' }}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor='category'>카테고리</FormLabel>
                                <Autocomplete
                                    multiple
                                    id='category'
                                    options={['카테고리1', '카테고리2', '카테고리3']}
                                    // getOptionLabel={(option) => option.title}
                                    filterSelectedOptions   // 이미 선택된 옵션 필터링
                                    freeSolo    // 임의의 값 입력 가능(=옵션에 없는 값)
                                    autoHighlight
                                    renderTags={(value: readonly string[], getTagProps) =>
                                        value.map((option: string, index: number) => {
                                            const { key, ...tagProps } = getTagProps({ index });
                                            return (
                                                <Chip variant="outlined" icon={<Tag />} label={option} key={key} {...tagProps} />
                                            );
                                        })
                                    }
                                    renderInput={(params) => (
                                        <TextField {...params} placeholder="HashTag.." sx={{ '& .MuiInputBase-root': { alignContent: 'center', height: 'auto', } }} />
                                    )}
                                    clearIcon={<Clear fontSize="small" />}
                                    slotProps={{
                                        clearIndicator: {   // button 스타일 적용
                                            sx: { 
                                                // border: 'none',
                                                width: '2rem',
                                                height: '2rem',
                                                borderRadius: 20,
                                                backgroundColor: 'transparent',
                                                '&:hover': { backgroundColor: 'gray[500]' },
                                            }
                                        },
                                    }}
                                />
                            </FormControl>
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
                                        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                                        <Typography>공개</Typography>
                                    </Stack>
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel sx={{ fontWeight: 'bold' }}>댓글</FormLabel>
                                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                                        <Typography>비허용</Typography>
                                        <AntSwitch inputProps={{ 'aria-label': 'ant design' }} />
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
                                <Link to={`/board/list`}>
                                <Button
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
                                </Link>
                            </Box>
                        </Box>
                    </Card>
                </SignInContainer>
                <ForgotPassword open={open} handleClose={handleClose} />
            </Box>
        </Grid>
    );
}

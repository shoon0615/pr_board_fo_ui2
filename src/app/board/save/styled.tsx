import { styled } from '@mui/material/styles';
// import { Stack, Switch, } from '@mui/material';
import MuiCard from '@mui/material/Card';

import { ReactNode } from 'react';
import {
    Stack, Switch, Box, Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';

export const StyledCard = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
}));

export const StyledSignInContainer = styled(Stack)(({ theme }) => ({
    // height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
}));

export const StyledAntSwitch = styled(Switch)(({ theme }) => ({
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

// TODO: 임시 보관
export const BoardSaveWrapper = ({ children }: { children: ReactNode }) => {
// export default function BoardSaveWrapper(children: ReactNode) {
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
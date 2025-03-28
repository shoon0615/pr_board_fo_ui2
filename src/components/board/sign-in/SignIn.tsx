import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import ForgotPassword from './ForgotPassword';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';

import { useSearchParams, useNavigate } from 'react-router-dom';

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '450px',
    },
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage:
            'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            backgroundImage:
                'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    },
    'html:has(&)': {
        '--template-frame-height': '0px',
    },
}));

export default function SignIn(props: { disableCustomTheme?: boolean }) {
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const navigate = useNavigate();
    // 쿼리스트링 정보를 가져와 사용하기 쉽게 객체로 변환합니다.
    const [searchParams] = useSearchParams();
    const query = Object.fromEntries(searchParams);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if (emailError || passwordError) {
            // `<form>`의 새로고침(기본 동작)을 방지합니다.
            event.preventDefault();
            return;
        }
        // `<form>`의 데이터를 가져와 사용하기 쉽게 객체로 변환합니다.
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });

        const { email, password } = Object.fromEntries(data) as Record<string, string>;

        // 로그인 정보가 모두 있으면, 임시로 로그인 처리합니다.
        localStorage.setItem('access_token', 'abcd1234');
        navigate(query.redirectTo || '/');
    };

    React.useEffect(() => {
        localStorage.getItem('access_token') && localStorage.removeItem('access_token');
        // localStorage.getItem('access_token') && localStorage.clear();
    }, []);
    
    const validateInputs = () => {
        const email = document.getElementById('email') as HTMLInputElement;
        const password = document.getElementById('password') as HTMLInputElement;

        let isValid = true;

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Please enter a valid email address.');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        if (!password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Password must be at least 6 characters long.');
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }

        return isValid;
    };

    return (
        <SignInContainer direction='column' justifyContent='space-between' sx={{ width: '100%' }}>
            <Card variant='outlined'>
                {/* <SitemarkIcon /> */}
                {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <SitemarkIcon />
                </Box> */}
                <Typography
                    component='h1'
                    variant='h4'
                    sx={{
                        width: '100%',
                        fontSize: 'clamp(2rem, 10vw, 2.15rem)',
                    }}
                >
                    Sign in
                </Typography>
                <Box
                    component='form'
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        gap: 2,
                    }}
                >
                    <FormControl>
                        {/* <FormLabel htmlFor='email'>Email</FormLabel> */}
                        <TextField
                            error={emailError}
                            helperText={emailErrorMessage}
                            id='email'
                            type='email'
                            name='email'
                            // placeholder='your@email.com'
                            placeholder='아이디 입력'
                            autoComplete='email'
                            autoFocus
                            required
                            fullWidth
                            variant='outlined'
                            color={emailError ? 'error' : 'primary'}
                        />
                    </FormControl>
                    <FormControl>
                        <TextField
                            error={passwordError}
                            helperText={passwordErrorMessage}
                            name='password'
                            // placeholder='••••••'
                            placeholder='비밀번호 입력'
                            type='password'
                            id='password'
                            autoComplete='current-password'
                            autoFocus
                            required
                            fullWidth
                            variant='outlined'
                            color={passwordError ? 'error' : 'primary'}
                        />
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox value='remember' color='primary' />}
                        label='자동 로그인'
                    />
                    <ForgotPassword open={open} handleClose={handleClose} />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        onClick={validateInputs}
                    >
                        Sign in
                    </Button>
                    <Link
                        component='button'
                        type='button'
                        onClick={handleClickOpen}
                        variant='body2'
                        sx={{ alignSelf: 'center' }}
                    >
                        Forgot your password?
                    </Link>
                </Box>
                <Divider>or</Divider>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Button
                        fullWidth
                        variant='outlined'
                        onClick={() => alert('Sign in with Google')}
                        startIcon={<GoogleIcon />}
                    >
                        Sign in with Google
                    </Button>
                    <Button
                        fullWidth
                        variant='outlined'
                        onClick={() => alert('Sign in with Facebook')}
                        startIcon={<FacebookIcon />}
                    >
                        Sign in with Facebook
                    </Button>
                    <Typography sx={{ textAlign: 'center' }}>
                        Don&apos;t have an account?{' '}
                        <Link
                            href='/material-ui/getting-started/templates/sign-in/'
                            variant='body2'
                            sx={{ alignSelf: 'center' }}
                        >
                            Sign up
                        </Link>
                    </Typography>
                </Box>
            </Card>
        </SignInContainer>
    );
}

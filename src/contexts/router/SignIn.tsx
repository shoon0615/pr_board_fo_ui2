import { useSearchParams, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SignIn() {
    const navigate = useNavigate();
    // 쿼리스트링 정보를 가져와 사용하기 쉽게 객체로 변환합니다.
    const [searchParams] = useSearchParams();
    const query = Object.fromEntries(searchParams);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        // `<form>`의 새로고침(기본 동작)을 방지합니다.
        event.preventDefault();
        // `<form>`의 데이터를 가져와 사용하기 쉽게 객체로 변환합니다.
        const formData = new FormData(event.currentTarget);
        const { email, password } = Object.fromEntries(formData) as Record<
            string,
            string
        >;
        // 로그인 정보가 모두 있으면, 임시로 로그인 처리합니다.
        if (email && password) {
            localStorage.setItem('access_token', 'abcd1234');
            navigate(query.redirectTo || '/');
        }
    }

    return (
        <>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                {/* 
                <input type='email' name='email' placeholder='Email' />
                <input type='password' name='password' placeholder='Password' />
                <button type='submit'>Sign In</button>
                 */}
                <TextField type="email" label="email" name="email" variant="outlined" />
                <TextField type="password" label="password" name="password" variant="outlined" />
                <Button type="submit" variant="outlined">Sign In</Button>
            </form>

            {/* 
            <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
             */}
        </>
    );
}

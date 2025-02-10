import { redirect } from 'react-router-dom';

export interface User {
    name: string;
    age: number;
}

async function getUser() {
    const token = localStorage.getItem('access_token');
    // const res = await fetch('httsp://api.heropy.dev/user/me', {
    //   headers: { 'Authorization': `Bearer ${token}` }
    // })
    // return res.json()

    // 토큰 정보가 있으면, 사용자 정보를 반환합니다.
    if (token) return { name: 'Neo', age: 22 } satisfies User;
    return null;
}

// 페이지 접근 시 호출되는 로더(Loader) 함수!
export async function requiresAuth({ request }: { request: Request }) {
    const user = await getUser();
    if (!user) {
        const url = new URL(request.url); // 요청 페이지의 URL 정보를 가져옵니다.
        const redirectTo = url.pathname + url.search; // 요청 페이지의 경로 + 쿼리스트링
        return redirect(`/signIn?redirectTo=${encodeURIComponent(redirectTo)}`); // 돌아갈 페이지 정보(`redirectTo`)와 함께 로그인 페이지로 이동합니다.
    }
    return user; // 반환하는 데이터는 `useLoaderData` 훅으로 사용할 수 있습니다.
}

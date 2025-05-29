import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
// import { ErrorBoundary } from 'react-error-boundary';

// (성능 개선??)
// const App = lazy(() => import(/* webpackChunkName:'main' */ '@/App'));
const App = lazy(() => import('@/App'));
const MainGrid = lazy(() => import('@/pages/dashboard/components/MainGrid'));

// const List = lazy(() => import('@/pages/board'));
const List = lazy(() => import('@/app/board/list'));
const Create = lazy(() => import('@/app/board/create'));
const Detail = lazy(() => import('@/app/board/detail'));
const SignIn = lazy(() => import('@/app/member/sign-in'));

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                element: (
                    // <ErrorBoundary FallbackComponent={<div>Error!!</div>}>
                    <Suspense fallback={<div>Loading</div>}>
                        <Outlet />
                    </Suspense>
                ),
                errorElement: <div>Error!!</div>,
                children: [
                    {
                        // path: '/',
                        index: true,
                        element: <MainGrid />,
                    },
                    {
                        /** 게시판 */
                        path: 'board',
                        element: <Outlet />,
                        children: [
                            {
                                path: 'list',
                                element: <List />,
                            },
                            {
                                path: 'create/:bdId',
                                element: <Create />,
                            },
                            {
                                path: 'detail/:id',
                                element: <Detail />,
                            },
                            {
                                path: 'signIn',
                                element: <SignIn />,
                            },
                        ]
                    },
                    {
                        path: '*',
                        element: <div>Not Found</div>
                    }
                ],
            }
        ]
    }
]);



export default router;

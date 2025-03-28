import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
// import { ErrorBoundary } from 'react-error-boundary';

// (성능 개선??)
// const App = lazy(() => import(/* webpackChunkName:'main' */ '../../App'));
const App = lazy(() => import('../../App'));
const MainGrid = lazy(() => import('../../components/dashboard/components/MainGrid'));

const List = lazy(() => import('../../components/board/list/List'));
const SignIn = lazy(() => import('../../components/board/sign-in/SignIn'));
const Create = lazy(() => import('../../components/board/create/Create'));
const Detail = lazy(() => import('../../components/board/detail/Detail'));

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
                                path: 'signIn',
                                element: <SignIn />,
                            },
                            {
                                path: 'create/:bdId',
                                element: <Create />,
                            },
                            {
                                path: 'detail/:bdId',
                                element: <Detail />,
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

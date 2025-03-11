import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
// import { ErrorBoundary } from 'react-error-boundary';

// import App from '../../App';
// import MainGrid from '../../components/dashboard/components/MainGrid';

import { requiresAuth } from './requiresAuth'

// (성능 개선??)
// const App = lazy(() => import(/* webpackChunkName:'main' */ '../../App'));
const App = lazy(() => import('../../App'));
const MainGrid = lazy(() => import('../../components/dashboard/components/MainGrid'));

// const Test = lazy(() => import('../../components/custom/marketing-page/MarketingPage'));
const Test = lazy(() => import('../../components/custom/create/Checkout'));
const Test2 = lazy(() => import('../../components/custom/detail/Checkout'));

const BoardGrid = lazy(() => import('../../components/custom/MainGrid'));
const Blog = lazy(() => import('../../components/custom/blog/Blog'));
const SignIn = lazy(() => import('../../components/custom/sign-in/SignIn'));

const router = createBrowserRouter([
    {
        // path: '/',
        element: <App />,
        children: [
            {
                // path: '/',
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
                        path: 'test',
                        element: <div>test</div>,
                        loader: requiresAuth,
                    },
                    {
                        /** 게시판 */
                        path: 'board',
                        element: <Outlet />,
                        children: [
                            {
                                index: true,
                                element: <div>board</div>,
                            },
                            {
                                // path: '/:bdId',
                                path: ':bdId',
                                element: <BoardGrid />,
                            },
                            {
                                path: 'blog',
                                element: <Blog />,
                            },
                            {
                                path: 'blog/:bdId',
                                element: <BoardGrid />,
                            },
                            {
                                path: 'signIn',
                                element: <SignIn />,
                            },
                            {
                                path: 'test',
                                element: <Test />,
                            },
                            {
                                path: 'test/:bdId',
                                element: <Test />,
                            },
                            {
                                path: 'test2',
                                element: <Test2 />,
                            },
                            {
                                path: 'test2/:bdId',
                                element: <Test2 />,
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

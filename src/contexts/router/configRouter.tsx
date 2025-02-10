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

const SignIn = lazy(() => import('./SignIn'));

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
                        path: '/signIn',
                        element: <SignIn />,
                    },
                    {
                        path: '/test',
                        element: <div>test</div>,
                        loader: requiresAuth,
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

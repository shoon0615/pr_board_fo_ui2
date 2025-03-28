import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// redux
import { Provider } from 'react-redux';
import store from './contexts/store/configStore';

// cookie
import { CookiesProvider } from 'react-cookie';

// react-query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// react-router
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import router from './contexts/router/configRouter'

// modal
import { ModalProvider } from 'react-modal-hook';

// styled-components
import GlobalStyle from './styles/GlobalStyle'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5, // 5분
        },
    },
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    // <React.StrictMode>
    <>
        <Provider store={store}>
            <CookiesProvider>
                <QueryClientProvider client={queryClient}>
                    <ModalProvider>
                        {/* <BrowserRouter> */}
                        <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
                        {/* <GlobalStyle /> */}
                        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
                    </ModalProvider>
                </QueryClientProvider>
            </CookiesProvider>
        </Provider>
    </>
);

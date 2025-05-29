import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// redux
import { Provider } from 'react-redux';
import store from '@/contexts/store/configStore';

// cookie
import { CookiesProvider } from 'react-cookie';

// react-query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// react-router
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import router from '@/contexts/router/configRouter'

// modal
import { ModalProvider } from 'react-modal-hook';

// styled-components
import GlobalStyle from '@/styles/GlobalStyle'

/**
 * react-query 설정
 * @property staleTime - 데이터가 상하는데 걸리는 시간(ms)
 * @property refetchInterval - 데이터가 자동으로 새로고침되는 간격(ms)
 * @property refetchOnMount - useQuery 연결 시 데이터 갱신 여부(default: true)
 * @property refetchOnReconnect - 네트워크 재연결 시 데이터 갱신 여부(default: true)
 * @property refetchOnWindowFocus - 브라우저 화면 포커스 시 데이터 갱신 여부(default: true)
 */
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // staleTime: 1000 * 60 * 5, // 5분
            staleTime: 1000 * 60,   // 1분
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

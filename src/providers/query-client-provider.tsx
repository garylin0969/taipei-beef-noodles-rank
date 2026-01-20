import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { type ReactNode, useState } from 'react';

/**
 * QueryProvider 的屬性介面
 */
interface QueryProviderProps {
    /** 子元件 */
    children: ReactNode;
}

/**
 * React Query 的 Provider 元件
 *
 * 設定並提供 QueryClient 給應用程式使用，並包含開發工具。
 * 設定了全域的 staleTime 與 gcTime 為 30 分鐘，並關閉視窗聚焦時的自動重新獲取。
 *
 * @param {QueryProviderProps} props - 元件屬性
 */
const QueryProvider = ({ children }: QueryProviderProps) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 30 * 60 * 1000, // 30 分鐘
                        gcTime: 30 * 60 * 1000, // 30 分鐘
                        retry: 3,
                        refetchOnWindowFocus: false,
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default QueryProvider;
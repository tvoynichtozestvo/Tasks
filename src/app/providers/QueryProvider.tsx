import { QueryClient, QueryClientProvider } from 'react-query'

export default function QueryProvider({
    children
}: {
    children: React.ReactNode
}) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                enabled: false,
                retryDelay: 500
            }
        }
    })
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

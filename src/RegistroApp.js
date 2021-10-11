import React from 'react';
import AppRouter from './routers/AppRouter';
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();
export const RegistroApp = () => {
    return (
        <div>
        <QueryClientProvider client={client}>
            <AppRouter/>
        </QueryClientProvider>
        </div>
    )
}

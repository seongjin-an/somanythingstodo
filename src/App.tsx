import React from 'react'
import TestComponent from "./components/TestComponent";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()
function App() {
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <TestComponent/>
            </QueryClientProvider>
        </div>
    )
}

export default App
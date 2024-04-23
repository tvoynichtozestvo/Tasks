import {QueryClientProvider} from "./app/providers";
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./app/router/AppRouter.tsx";


function App() {

  return (
    <QueryClientProvider>
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App

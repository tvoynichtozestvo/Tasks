import Header from "./widgets/Header/Header.tsx";
import {QueryClientProvider} from "./app/providers";
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./app/router/AppRouter.tsx";


function App() {

  return (
    <QueryClientProvider>
        <BrowserRouter>
            <Header/>
            <AppRouter/>
        </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App

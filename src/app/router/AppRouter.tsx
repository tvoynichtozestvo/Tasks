import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const HomePage = lazy(() => import('../../pages/Main/page.tsx'))
const Login = lazy(() => import('../../pages/Login/page.tsx'))
const Register = lazy(() => import('../../pages/Register/page.tsx'))

export const AppRouter = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={
                    <Suspense>
                        <HomePage />
                    </Suspense>
                }
            />
            <Route
                path='/login'
                element={
                    <Suspense>
                        <Login />
                    </Suspense>
                }
            />
            <Route
                path='/login'
                element={
                    <Suspense>
                        <Register></Register>
                    </Suspense>
                }
            />
        </Routes>
    )
}

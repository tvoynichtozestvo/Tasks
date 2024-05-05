import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const HomePage = lazy(() => import('../../pages/Main/page.tsx'))
const Login = lazy(() => import('../../pages/Login/page.tsx'))
const Register = lazy(() => import('../../pages/Register/page.tsx'))
const Test = lazy(() => import('../../pages/testSideBar/page.tsx'))
const Tariffs = lazy(() => import('../../pages/Tariffs/page.tsx'))
const Profile = lazy(()=>import('../../pages/Profile/page.tsx'))

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
                path='/register'
                element={
                    <Suspense>
                        <Register/>
                    </Suspense>
                }
            />
            <Route
                path='/test'
                element={
                    <Suspense>
                        <Test/>
                    </Suspense>
                }
            />
            <Route
                path='/tariffs'
                element={
                    <Suspense>
                        <Tariffs/>
                    </Suspense>
                }
            />
            <Route
                path='/profile'
                element={
                    <Suspense>
                        <Profile/>
                    </Suspense>
                }
            />
        </Routes>
    )
}

import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'
import Layout from '../pages/Layout'
import Home from '../pages/Home'
import Employee from '../pages/Employee'
import ErrorPage from '../pages/ErrorPage'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<Layout />} errorElement={<ErrorPage />}>
                <Route index element={<Home />} />
                <Route path='/employee' element={<Employee />} />
            </Route>
            <Route path='*' element={<ErrorPage />} />
        </>
    )
)

function Router() {
    return (
        <RouterProvider router={router} />
    )
}

export default Router
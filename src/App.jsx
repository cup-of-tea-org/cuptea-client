import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './pages/Main'
import LoginLayout from './pages/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
  },
  {
    path: '/login',
    element: <LoginLayout />,
  }
])


function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './pages/Main'
import LoginLayout from './pages/Login'
import LoginDesc from './components/login/LoginDesc'
import JoinDesc from './components/join/JoinDesc'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
  },
  {
    path: '/login',
    element: <LoginLayout />,
    children: [
      {
        index: true,
        element: <LoginDesc />
      },
      {
        path: 'join',
        element: <JoinDesc />
      },
    ]
  }
])


function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App

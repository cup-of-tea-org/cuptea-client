import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './pages/Main'
import LoginLayout from './pages/Login'
import LoginDesc from './components/login/LoginDesc'
import JoinDesc from './components/join/JoinDesc'
import Home from './components/section/Home'
import ReadyQuest from './components/section/quest/ReadyQuest'
import QuestForm from './components/section/quest/QuestForm'
import SingleQuestForm from './components/section/quest/SingleQuestForm'
import QuestionList from './components/section/quest/QuestionList'
import CupTeaRoom from './components/section/quest/CupTeaRoom'
import MyQuestionList from './components/section/quest/MyQuestionList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index:true,
        element: <Home />
      },
      {
        path: ':id/cuptea',
        element: <MyQuestionList />
      },
      {
        path: 'quest',
        element: <ReadyQuest />,
      },
      {
        path: 'quest/form',
        element: <QuestForm />
      },
      {
        path: 'quest/singleQuestForm',
        element: <SingleQuestForm />
      },
      {
        path: 'quest/:id/questList',
        element: <QuestionList />
      },
      {
        path: ':id/:roomNum/singleQuestForm',
        element: <SingleQuestForm />
      }
      
    ]
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

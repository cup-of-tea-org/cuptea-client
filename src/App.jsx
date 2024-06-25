import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import MainLayout from './pages/Main'
import LoginLayout from './pages/Login'
import LoginDesc from './components/login/LoginDesc'
import JoinDesc from './components/join/JoinDesc'
import Home from './components/section/Home'
import ReadyQuest from './components/section/quest/ReadyQuest'
import QuestForm from './components/section/quest/QuestForm'
import SingleQuestForm from './components/section/quest/SingleQuestForm'
import QuestionList from './components/section/quest/QuestionList'
import MyQuestionList from './components/section/quest/MyQuestionList'
import Profile from './pages/Profile'
import MyDoQuest from './pages/MyDoQuest'
import ReadyQuestDetail from './components/section/quest/ReadyQuestDetail'
import Visitors from './pages/Visitors'
import FriendLayout from './pages/Friend'
import FriendListPage from './pages/FriendListPage'
import QuestLayout from './pages/Quest'
import AnswerForm from './components/section/quest/AnswerForm'
import { dummyFunction } from './components/common/commonjs/DummyFunction'
import FindIdPwPage from './pages/FindIdPwPage'
import NewPasswordForm from './components/login/NewPasswordForm'



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
        path: ':id/visitors',
        element: <Visitors />
      },
      {
        path: ':id/cuptea',
        element: <MyQuestionList />
      },
      {
        path: ':id/my-cuptea',
        element: <MyDoQuest />
      },
      {
        path: ':id/profile',
        element: <Profile />
      },
      {
        path: 'quest',
        element: <ReadyQuest />,
      },
      {
        path: 'quest/:id',
        element: <ReadyQuestDetail />
      },
      {
        path: 'quest/:id/form',
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
        path: ':id/:roomId/singleQuestForm',
        element: <SingleQuestForm />
      },
      {
        path: ':id/:roomId/cuptea',
        element: <QuestLayout />
      },
      {
        path: ':id/:roomId/quest',
        element: <AnswerForm />
      },
      {
        path: ':id/friends',
        element: <FriendLayout />
      },
      {
        path: ':id/friendList',
        element: <FriendListPage />
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
      {
        path: 'findUser',
        element: <FindIdPwPage></FindIdPwPage>
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

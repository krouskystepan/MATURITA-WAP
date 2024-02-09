import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './MainPage/MainPage'
import UserView from './UserView/UserView'
import UserList from './UserList/UserList'
import UserCreateForm from './UserCreateForm/UserCreateForm'
import UserUpdateForm from './UserUpdateForm/UserUpdateForm'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/user/:id" element={<UserView />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/create-user" element={<UserCreateForm />} />
        <Route path="/update-user/:id" element={<UserUpdateForm />} />
      </Routes>
    </BrowserRouter>
  )
}

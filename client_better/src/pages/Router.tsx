import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Page404 from './Page404'
import {
  CreateUserForm,
  CreatedUser,
  UserView,
  UserList,
  DeletedUser,
  UpdateUserForm,
} from './user'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<CreateUserForm />} />
        <Route path="/user/:id" element={<UserView />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/update-user/:id" element={<UpdateUserForm />} />
        <Route path="/created-user/:id" element={<CreatedUser />} />
        <Route path="/deleted-user/:id" element={<DeletedUser />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Page404 from './Page404'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/user/:id" element={<UserView />} /> */}
        {/* <Route path="/users" element={<UserList />} /> */}
        {/* <Route path="/create-user" element={<UserCreateForm />} /> */}
        {/* <Route path="/update-user/:id" element={<UserUpdateForm />} /> */}
        {/* <Route path="/created-user/:id" element={<CreatedUser />} /> */}
        {/* <Route path="/deleted-user/:id" element={<DeletedUser />} /> */}

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

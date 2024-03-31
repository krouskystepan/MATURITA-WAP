import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./Home";
import CreateUserForm from "./user/CreateUserForm";
import UserList from "./user/UserList";
import UserView from "./user/UserView";
import DeletedUser from "./user/DeletedUser";
import CreatedUser from "./user/CreatedUser";
import UpdateUserForm from "./user/UpdateUserForm";
import UpdatedUser from "./user/UpdatedUser";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />{" "}
      <Route path="/create-user" element={<CreateUserForm />} />
      <Route path="/user/:id" element={<UserView />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/update-user/:id" element={<UpdateUserForm />} />
      <Route path="/updated-user/:id" element={<UpdatedUser />} />
      <Route path="/created-user/:id" element={<CreatedUser />} />
      <Route path="/deleted-user/:id" element={<DeletedUser />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

import { Link } from 'react-router-dom'

export default function MainPage() {
  return (
    <>
      <Link to={'/user'}>
        <p>User view</p>
      </Link>
      <Link to="/create-user">
        <p>User create form</p>
      </Link>
      <Link to="/update-user">
        <p>User update form</p>
      </Link>
      <Link to="/users">
        <p>User list</p>
      </Link>
    </>
  )
}

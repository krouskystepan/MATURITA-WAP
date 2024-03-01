import { useParams, Link } from 'react-router-dom'

export default function CreatedUser() {
  const { id } = useParams()

  return (
    <>
      <p>User was created: {id}</p>
      <Link to={`/user/${id}`}>
        <p>View user</p>
      </Link>
      <Link to={'/'}>
        <p>Go back</p>
      </Link>
    </>
  )
}

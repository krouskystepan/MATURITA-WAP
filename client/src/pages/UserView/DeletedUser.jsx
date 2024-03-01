import { Link, useParams } from 'react-router-dom'

export default function UserDeleted() {
  const { id } = useParams()
  return (
    <>
      <p>User {id} was deleted</p>
      <Link to={'/'}>
        <p>Go Home</p>
      </Link>
    </>
  )
}

import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function UserUpdateForm() {
  const { id } = useParams()

  return (
    <>
      <h1>UserUpdateForm</h1>
      <Link to="/">
        <p>Back</p>
      </Link>
    </>
  )
}

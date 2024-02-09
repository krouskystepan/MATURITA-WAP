import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function UserUpdateForm() {
  const { id } = useParams();


  return (
    <>
      <Link to="/">Back</Link>
      <h2>UserUpdateForm</h2>
    </>
  )
}

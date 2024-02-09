import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function UserView() {
  const { id } = useParams()

  return (
    <>
      <h1>UserView - {id}</h1>
      <Link to="/">
        <p>Back</p>
      </Link>
    </>
  )
}

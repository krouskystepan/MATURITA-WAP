import { Link, useParams, useNavigate } from 'react-router-dom'
import { getUserById, deleteUser } from '../../models/User'
import { useState, useEffect } from 'react'

export default function UserView() {
  const { id } = useParams()
  const [user, setUser] = useState()
  const [loaded, setLoaded] = useState(false)
  const [formData, setFormData] = useState()
  const [info, setInfo] = useState()
  const navigate = useNavigate()

  const load = async () => {
    const data = await getUserById(id)
    if (data.status === 500 || data.status === 404) return setLoaded(null)
    if (data.status === 200) {
      setUser(data.payload)
      setLoaded(true)
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault()
    if (formData === user.firstName) {
      const result = await deleteUser(id)
      if (result.status === 200) {
        redirect(id)
      } else {
        setInfo('Failed to delete the user')
      }
    } else {
      setInfo('Wrong ID!')
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value)
  }

  const redirect = (id) => {
    return navigate(`/deleted-user/${id}`)
  }

  useEffect(() => {
    load()
  }, [])

  if (loaded === null) {
    return (
      <>
        <h1>User not found</h1>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <h1>Loading user...</h1>
      </>
    )
  }

  return (
    <>
      <h1>UserView - {id}</h1>
      <p>UserID: {id}</p>
      <p>UserFirstName: {user.firstName}</p>
      <p>UserLastName: {user.lastName}</p>
      <p>UserAge: {user.age}</p>
      <form>
        <p>Napište jmeno uživatele pro smazani</p>
        <input
          type="text"
          placeholder={user.firstName}
          onChange={handleChange}
        />
        <button onClick={handleDelete}>Smazat uživatele</button>
        <p>{info}</p>
      </form>{' '}
      <Link to={`/update-user/${id}`}>
        <p>Update user</p>
      </Link>
      <Link to="/">
        <p>Back</p>
      </Link>
    </>
  )
}

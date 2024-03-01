import { useParams } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { updateUser, getUserById } from '../../models/User'

export default function UserUpdateForm() {
  const { id } = useParams()
  const [user, setUser] = useState()
  const [formData, setFormData] = useState()
  const [info, setInfo] = useState()
  const [loaded, setLoaded] = useState()
  const navigate = useNavigate()

  const load = async () => {
    const data = await getUserById(id)
    if (data.status === 500 || data.status === 404) return setLoaded(null)
    if (data.status === 200) {
      setUser(data.payload)
      setLoaded(true)
    }
  }

  const postForm = async () => {
    const user = await updateUser(id, formData)

    if (user.status === 200) {
      redirectToSuccessPage(user.payload._id)
    } else {
      setInfo(user.msg)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handlePost = (e) => {
    e.preventDefault()
    postForm()
  }

  const redirectToSuccessPage = (id) => {
    return navigate(`/user/${id}`)
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
      <h1>UserUpdateForm</h1>
      <form>
        <input
          type="text"
          required
          name="firstName"
          placeholder="Enter your name"
          defaultValue={user.firstName}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="lastName"
          placeholder="Enter your surname"
          defaultValue={user.lastName}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="age"
          placeholder="Enter your age"
          defaultValue={user.age}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update user</button>
      </form>
      <p>{info}</p>
      <Link to="/">
        <p>Back</p>
      </Link>
    </>
  )
}

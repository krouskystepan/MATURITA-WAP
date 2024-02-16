import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { createUser } from '../../models/User'

export default function UserCreateForm() {
  const [formData, setFormData] = useState()
  const [info, setInfo] = useState()
  const navigate = useNavigate()

  const postForm = async () => {
    const user = await createUser(formData)
    if (user.status === 201) {
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
    return navigate(`/created-user/${id}`)
  }

  return (
    <>
      <h1>UserCreateForm</h1>
      <form>
        <input
          type="text"
          required
          name="firstName"
          placeholder="Enter your name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="lastName"
          placeholder="Enter your surname"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="age"
          placeholder="Enter your age"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create user</button>
      </form>
      <p>{info}</p>
      <Link to="/">
        <p>Back</p>
      </Link>
    </>
  )
}

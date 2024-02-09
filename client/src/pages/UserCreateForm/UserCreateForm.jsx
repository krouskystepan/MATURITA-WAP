import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { createUser } from '../../models/User'

export default function UserCreateForm() {
  const [formData, setFormData] = useState()
  const [info, setInfo] = useState()
  const navigate = useNavigate()

  const postForm = () => {
    
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

  const redirectToSuccessPage = () => {}

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
      <Link to="/">
        <p>Back</p>
      </Link>
    </>
  )
}

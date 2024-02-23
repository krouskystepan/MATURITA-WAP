import { Link } from 'react-router-dom'
import UserLink from './UserLink'
import { useState, useEffect } from 'react'
import { getAllUsers } from '../../models/User'

export default function UserList() {
  const [users, setUsers] = useState()
  const [loaded, setLoaded] = useState(false)

  const load = async () => {
    const data = await getAllUsers()
    if (data.status === 500 || data.status === 404) setLoaded(null)
    if (data.status === 200) {
      setUsers(data.payload)
      setLoaded(true)
    }
  }

  useEffect(() => {
    load()
  }, [users])

  if (loaded === null) {
    return (
      <>
        <p>Cats not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading...</p>
      </>
    )
  }

  return (
    <>
      <h1>UserList</h1>
      {users.map((user, index) => (
        <UserLink key={index} name={user.firstName} id={user._id}/>
      ))}
      <Link to="/">
        <p>Back</p>
      </Link>
    </>
  )
}

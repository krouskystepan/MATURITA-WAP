import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { getUserById } from '../../models/User'
import { useState, useEffect } from 'react'

export default function UserView() {
  const { id } = useParams()
  const [user, setUser] = useState()
  const [loaded, setLoaded] = useState()

  const load = async () => {
    const data = await getUserById(id)
    if (data.status === 500 || data.status === 404) return setLoaded(null)
    if (data.status === 200) {
      setUser(data.payload)
      setLoaded(true)
    }
  }

  useEffect(() => {
    load()
  }, [user])

  if (loaded === null) {
    return (
      <>
        <p>User not found</p>
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
      <h1>User view</h1>
      <p>User id: {id}</p>
      <p>User: {user.firstName}</p>
      <p>Surname: {user.lastName}</p>
      <p>Age: {user.age}</p>
      <Link to="/">
        <p>Back</p>
      </Link>
    </>
  )
}

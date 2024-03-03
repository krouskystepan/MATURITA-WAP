import { getAllUsers } from '@/models/User'
import { useEffect, useState } from 'react'
import { columns } from './columns'
import { UserTable } from './UserTable'
import Navbar from '@/components/shared/Navbar'
import { Layout404 } from '@/layouts'
import { Button } from '@/components/ui/button'

import type { IUserForm } from '@/types'
import { Link } from 'react-router-dom'

export default function UserList() {
  const [users, setUsers] = useState<IUserForm[]>([])
  const [loaded, setLoaded] = useState<boolean | null>(false)

  const load = async () => {
    const data = await getAllUsers()
    if (data.status === 500 || data.status === 404) return setLoaded(null)
    if (data.status === 200) {
      setUsers(data.payload)
      setLoaded(true)
    }
  }

  useEffect(() => {
    load()
  }, [])

  if (loaded === null) {
    return (
      <Layout404>
        <h1>Oops!</h1>
        <h1>404 - Users Not Found</h1>
        <Link to={'/'}>
          <Button>GO TO HOMEPAGE</Button>
        </Link>
      </Layout404>
    )
  }

  if (!loaded) {
    return (
      <Layout404>
        <h1>Loading user...</h1>
      </Layout404>
    )
  }

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <section className="flex-1 flex mt-10 justify-center">
        <div className="w-[420px]">
          <UserTable columns={columns} data={users} />
        </div>
      </section>
    </div>
  )
}

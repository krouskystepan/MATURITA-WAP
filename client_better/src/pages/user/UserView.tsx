import { Link, useNavigate, useParams } from 'react-router-dom'
import { deleteUser, getUserById } from '../../models/User'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Layout404, ViewLayout } from '@/Layouts'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import type { IUserForm } from '@/types'

export default function UserView() {
  const { id } = useParams()
  const [user, setUser] = useState<IUserForm>()
  const [loaded, setLoaded] = useState<boolean | null>(false)
  const navigate = useNavigate()

  const load = async () => {
    const data = await getUserById(id!)

    if (data.status === 500 || data.status === 404) return setLoaded(null)
    if (data.status === 200) {
      setUser(data.payload)
      setLoaded(true)
    }
  }

  const handleDelete = async () => {
    const result = await deleteUser(id as string)
    if (result.status === 200) {
      redirect(id as string)
    }
  }

  const redirect = (id: string) => {
    return navigate(`/deleted-user/${id}`)
  }

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loaded === null) {
    return (
      <Layout404>
        <h1>Oops!</h1>
        <h1>404 - User Not Found</h1>
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
    <ViewLayout>
      <h2 className="font-bold text-2xl">User ID: {id}</h2>
      <p>First name: {user?.firstName}</p>
      <p>Last name: {user?.lastName}</p>
      <p>Age: {user?.age}</p>
      <div className="space-x-3">
        <Button variant="secondary">
          <Link to={`/update-user/${id}`}>Update user</Link>
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive">Delete user</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete user
                from our servers.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit" variant="secondary">
                  Cancel
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button variant="destructive" onClick={handleDelete}>
                  Delete
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Button>
        <Link to={'/'}>GO TO HOMEPAGE</Link>
      </Button>
    </ViewLayout>
  )
}

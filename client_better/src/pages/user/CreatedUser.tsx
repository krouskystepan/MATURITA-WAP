import { ViewLayout } from '@/Layouts'
import { Button } from '@/components/ui/button'
import { Link, useParams } from 'react-router-dom'

export default function CreatedUser() {
  const { id } = useParams()

  return (
    <ViewLayout>
      <h1 className="text-3xl font-bold">User was created: {id}</h1>
      <Button variant="secondary">
        <Link to={`/user/${id}`}>View user</Link>
      </Button>
      <br />
      <Button>
        <Link to={'/'}>GO TO HOMEPAGE</Link>
      </Button>
    </ViewLayout>
  )
}

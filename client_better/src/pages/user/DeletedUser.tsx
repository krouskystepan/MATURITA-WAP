import { ViewLayout } from '@/Layouts'
import { Button } from '@/components/ui/button'
import { Link, useParams } from 'react-router-dom'

export default function DeletedUser() {
  const { id } = useParams()

  return (
    <ViewLayout>
      <h1 className="text-3xl font-bold">User {id} was deleted</h1>
      <Button>
        <Link to={'/'}>GO TO HOMEPAGE</Link>
      </Button>
    </ViewLayout>
  )
}

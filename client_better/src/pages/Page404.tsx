import { Layout404 } from '@/Layouts'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function Page404() {
  return (
    <Layout404>
      <h1>Oops!</h1>
      <h2>404 - PAGE NOT FOUND</h2>
      <Button>
        <Link to={'/'}>GO TO HOMEPAGE</Link>
      </Button>
    </Layout404>
  )
}

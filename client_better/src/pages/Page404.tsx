import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function Page404() {
  return (
    <div className="h-screen grid place-items-center text-3xl font-bold">
      <div className="text-center space-y-2">
        <h1>Oops!</h1>
        <h2>404 - PAGE NOT FOUND</h2>
        <Button>
          <Link to={'/'}>GO TO HOMEPAGE</Link>
        </Button>
      </div>
    </div>
  )
}

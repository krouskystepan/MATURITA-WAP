import { Link } from "react-router-dom"

export default function UserLink(props) {
  return (
    <>
        <p>Name: {props.firstName}</p>
        <Link to={`/user/${props.id}`}>
            <p>View user</p>
        </Link>
    </>
  )
}
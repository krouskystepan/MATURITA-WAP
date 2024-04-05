import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";

/**
 * This component represents the page displayed when a user is successfully updated.
 * It displays the ID of the updated user and provides a button to view the user details.
 */
export default function CreatedUser() {
  const { id } = useParams();

  return (
    <section>
      <h1 className="text-3xl font-bold">User was updated: {id}</h1>
      <Link to={`/user/${id}`}>
        <Button className="bg-blue-600 text-white hover:bg-blue-600/90">
          View
        </Button>
      </Link>
    </section>
  );
}

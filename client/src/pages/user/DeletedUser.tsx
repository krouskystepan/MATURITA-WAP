import { useParams } from "react-router-dom";

/**
 * This component represents the page displayed when a user is successfully deleted.
 * It displays the ID of the deleted user.
 */
export default function DeletedUser() {
  const { id } = useParams();

  return (
    <section>
      <h1 className="text-3xl font-bold">User {id} was deleted</h1>
    </section>
  );
}

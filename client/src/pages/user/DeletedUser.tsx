import { useParams } from "react-router-dom";

export default function DeletedUser() {
  const { id } = useParams();

  return (
    <section>
      <h1 className="text-3xl font-bold">User {id} was deleted</h1>
    </section>
  );
}

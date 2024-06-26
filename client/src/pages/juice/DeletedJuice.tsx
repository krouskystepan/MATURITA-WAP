import { useParams } from "react-router-dom";

/**
 * This component represents the page displayed when a juice is successfully deleted.
 * It displays the ID of the deleted juice.
 */
export default function DeletedJuice() {
  const { id } = useParams();

  return (
    <section>
      <h1 className="text-3xl font-bold">Džus s ID: {id} byl odstraněn</h1>
    </section>
  );
}

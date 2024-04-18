import { useParams } from "react-router-dom";

/**
 * This component represents the page displayed when a cameraman is successfully deleted.
 * It displays the ID of the deleted cameraman.
 */
export default function DeletedCameraman() {
  const { id } = useParams();

  return (
    <section>
      <h1 className="text-3xl font-bold">Fotograf s ID: {id} byl odstraněn</h1>
    </section>
  );
}

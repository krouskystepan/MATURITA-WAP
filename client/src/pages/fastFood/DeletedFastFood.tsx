import { useParams } from "react-router-dom";

/**
 * This component represents the page displayed when a fastFood is successfully deleted.
 * It displays the ID of the deleted fastFood.
 */
export default function DeletedFastFood() {
  const { id } = useParams();

  return (
    <section>
      <h1 className="text-3xl font-bold">Fastfood s ID: {id} byl odstraněn</h1>
    </section>
  );
}

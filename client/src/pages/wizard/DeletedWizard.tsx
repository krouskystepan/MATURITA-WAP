import { useParams } from "react-router-dom";

/**
 * This component represents the page displayed when a wizard is successfully deleted.
 * It displays the ID of the deleted wizard.
 */
export default function DeletedWizard() {
  const { id } = useParams();

  return (
    <section>
      <h1 className="text-3xl font-bold">Čaroděj s ID:{id} byl odstraněn</h1>
    </section>
  );
}

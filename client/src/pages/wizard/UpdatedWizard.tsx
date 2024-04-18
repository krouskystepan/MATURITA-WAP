import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";

/**
 * This component represents the page displayed when a wizard is successfully updated.
 * It displays the ID of the updated wizard and provides a button to view the wizard details.
 */
export default function CreatedWizard() {
  const { id } = useParams();

  return (
    <section>
      <h1 className="text-3xl font-bold">
        Čaroděj s ID: {id} byl aktualizován
      </h1>
      <Link to={`/wizard/${id}`}>
        <Button className="bg-blue-600 text-white hover:bg-blue-600/90">
          Prohlédnout
        </Button>
      </Link>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";

/**
 * This component represents the page displayed when a juice is successfully updated.
 * It displays the ID of the updated juice and provides a button to view the juice details.
 */
export default function CreatedJuice() {
  const { id } = useParams();

  return (
    <section>
      <h1 className="text-3xl font-bold">Juice was updated: {id}</h1>
      <Link to={`/juice/${id}`}>
        <Button className="bg-blue-600 text-white hover:bg-blue-600/90">
          View
        </Button>
      </Link>
    </section>
  );
}

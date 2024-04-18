import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";

/**
 * This component represents the page displayed when a new cameraman is successfully created.
 * It displays the ID of the created cameraman and provides a button to view the details.
 */
export default function CreatedCameraman() {
  const { id } = useParams();

  return (
    <section>
      <h1 className="text-3xl font-bold">Cameraman was created: {id}</h1>
      <Link to={`/cameraman/${id}`}>
        <Button className="bg-blue-600 text-white hover:bg-blue-600/90">
          View
        </Button>
      </Link>
    </section>
  );
}

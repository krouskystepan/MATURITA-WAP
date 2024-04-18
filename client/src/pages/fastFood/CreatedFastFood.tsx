import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";

/**
 * This component represents the page displayed when a new fastFood is successfully created.
 * It displays the ID of the created fastFood and provides a button to view the details.
 */
export default function CreatedFastFood() {
  const { id } = useParams();

  return (
    <section>
      <h1 className="text-3xl font-bold">FastFood was created: {id}</h1>
      <Link to={`/fastFood/${id}`}>
        <Button className="bg-blue-600 text-white hover:bg-blue-600/90">
          View
        </Button>
      </Link>
    </section>
  );
}

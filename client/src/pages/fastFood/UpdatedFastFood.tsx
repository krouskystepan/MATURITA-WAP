import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";

/**
 * This component represents the page displayed when a fastFood is successfully updated.
 * It displays the ID of the updated fastFood and provides a button to view the fastFood details.
 */
export default function CreatedFastFood() {
  const { id } = useParams();

  return (
    <section>
      <h1 className="text-3xl font-bold">
        Fastfood s ID: {id} byl aktualizován
      </h1>
      <Link to={`/fastFood/${id}`}>
        <Button className="bg-blue-600 text-white hover:bg-blue-600/90">
          Prohlédnout
        </Button>
      </Link>
    </section>
  );
}

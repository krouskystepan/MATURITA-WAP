import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";

export default function CreatedUser() {
  const { id } = useParams();

  return (
    <section>
      <h1 className="text-3xl font-bold">User was created: {id}</h1>
      <Link to={`/user/${id}`}>
        <Button className="bg-blue-600 text-white hover:bg-blue-600/90">
          View
        </Button>
      </Link>
    </section>
  );
}

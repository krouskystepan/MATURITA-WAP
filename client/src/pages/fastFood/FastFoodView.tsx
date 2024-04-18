import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteFastFood, getFastFoodById } from "../../models/FastFood";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import type { IFastFoodForm } from "@/types";

/**
 * This component displays the details of a fastFood retrieved from the server based on the provided ID.
 * It allows the fastFood to update or delete the fastFood's information.
 */
export default function FastFoodView() {
  const { id } = useParams();
  const [fastFood, setFastFood] = useState<IFastFoodForm>();
  const [loaded, setLoaded] = useState<boolean | null>(false);
  const navigate = useNavigate();

  /**
   * Function to load fastFood details from the server.
   */
  const load = async () => {
    const data = await getFastFoodById(id!);

    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setFastFood(data.payload);
      setLoaded(true);
    }
  };

  const handleDelete = async () => {
    const result = await deleteFastFood(id as string);
    if (result.status === 200) {
      redirect(id as string);
    }
  };

  const redirect = (id: string) => {
    return navigate(`/deleted-fastFood/${id}`);
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loaded === null) {
    return (
      <div className="spacing-y-4 flex h-screen flex-col items-center justify-center">
        <h2 className="text-4xl font-bold">FastFood Not Found</h2>
      </div>
    );
  }

  if (!loaded)
    return <h1 className="text-xl font-semibold">Loading fastFood...</h1>;

  return (
    <section>
      <h2 className="text-2xl font-bold">FastFood ID: {id}</h2>
      <p>Company: {fastFood?.company}</p>
      <p>Menu: {fastFood?.menu}</p>
      <p>Price: {fastFood?.price}</p>
      <div className="mt-2 space-x-3">
        <Link to={`/update-fastFood/${id}`}>
          <Button className="bg-orange-600 text-white hover:bg-orange-600/90">
            Update
          </Button>
        </Link>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-red-600 text-white hover:bg-red-600/90">
              Delete
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete
                fastFood from our servers.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="secondary">Cancel</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button variant="destructive" onClick={handleDelete}>
                  Delete
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

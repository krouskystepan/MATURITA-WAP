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
      <div className="spacing-y-4 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold">Fastfood nebyl nalezen</h2>
      </div>
    );
  }

  if (!loaded)
    return <h1 className="text-xl font-semibold">Načítám fastfood...</h1>;

  return (
    <section>
      <h2 className="text-2xl font-bold">ID fastfoodu: {id}</h2>
      <p>Firma: {fastFood?.company}</p>
      <p>Menu: {fastFood?.menu}</p>
      <p>Cena za objednávku: {fastFood?.price}</p>
      <div className="mt-2 space-x-3">
        <Link to={`/update-fastFood/${id}`}>
          <Button className="bg-orange-600 text-white hover:bg-orange-600/90">
            Aktualizovat
          </Button>
        </Link>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-red-600 text-white hover:bg-red-600/90">
              Smazat
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Jste si jistí?</DialogTitle>
              <DialogDescription>
                Tato akce nemůže být vrácena a smaže všechny záznamy z našich
                serverů
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="secondary">Zrušit</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button variant="destructive" onClick={handleDelete}>
                  Smazat
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

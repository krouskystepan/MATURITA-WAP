import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteJuice, getJuiceById } from "../../models/Juice";
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

import type { IJuiceForm } from "@/types";

/**
 * This component displays the details of a juice retrieved from the server based on the provided ID.
 * It allows the juice to update or delete the juice's information.
 */
export default function JuiceView() {
  const { id } = useParams();
  const [juice, setJuice] = useState<IJuiceForm>();
  const [loaded, setLoaded] = useState<boolean | null>(false);
  const navigate = useNavigate();

  /**
   * Function to load juice details from the server.
   */
  const load = async () => {
    const data = await getJuiceById(id!);

    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setJuice(data.payload);
      setLoaded(true);
    }
  };

  const handleDelete = async () => {
    const result = await deleteJuice(id as string);
    if (result.status === 200) {
      redirect(id as string);
    }
  };

  const redirect = (id: string) => {
    return navigate(`/deleted-juice/${id}`);
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loaded === null) {
    return (
      <div className="spacing-y-4 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold">Džus nebyl nalezen</h2>
      </div>
    );
  }

  if (!loaded)
    return <h1 className="text-xl font-semibold">Načítám džus...</h1>;

  return (
    <section>
      <h2 className="text-2xl font-bold">ID džusu: {id}</h2>
      <p>Firma: {juice?.company}</p>
      <p>Typ džusu: {juice?.type}</p>
      <p>Cena za kus: {juice?.price}</p>
      <div className="mt-2 space-x-3">
        <Link to={`/update-juice/${id}`}>
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

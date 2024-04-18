import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteWizard, getWizardById } from "../../models/Wizard";
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

import type { IWizardForm } from "@/types";

/**
 * This component displays the details of a wizard retrieved from the server based on the provided ID.
 * It allows the wizard to update or delete the wizard's information.
 */
export default function WizardView() {
  const { id } = useParams();
  const [wizard, setWizard] = useState<IWizardForm>();
  const [loaded, setLoaded] = useState<boolean | null>(false);
  const navigate = useNavigate();

  /**
   * Function to load wizard details from the server.
   */
  const load = async () => {
    const data = await getWizardById(id!);

    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setWizard(data.payload);
      setLoaded(true);
    }
  };

  const handleDelete = async () => {
    const result = await deleteWizard(id as string);
    if (result.status === 200) {
      redirect(id as string);
    }
  };

  const redirect = (id: string) => {
    return navigate(`/deleted-wizard/${id}`);
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loaded === null) {
    return (
      <div className="spacing-y-4 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold">Čaroděj nebyl nalezen</h2>
      </div>
    );
  }

  if (!loaded)
    return <h1 className="text-xl font-semibold">Načítám čaroděje...</h1>;

  return (
    <section>
      <h2 className="text-2xl font-bold">ID čaroděje: {id}</h2>
      <p>Jméno: {wizard?.name}</p>
      <p>Hůlka: {wizard?.stick}</p>
      <p>Věk: {wizard?.age}</p>
      <div className="mt-2 space-x-3">
        <Link to={`/update-wizard/${id}`}>
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

import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteCameraman, getCameramanById } from "../../models/Cameraman";
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

import type { ICameramanForm } from "@/types";

/**
 * This component displays the details of a cameraman retrieved from the server based on the provided ID.
 * It allows the cameraman to update or delete the cameraman's information.
 */
export default function CameramanView() {
  const { id } = useParams();
  const [cameraman, setCameraman] = useState<ICameramanForm>();
  const [loaded, setLoaded] = useState<boolean | null>(false);
  const navigate = useNavigate();

  /**
   * Function to load cameraman details from the server.
   */
  const load = async () => {
    const data = await getCameramanById(id!);

    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setCameraman(data.payload);
      setLoaded(true);
    }
  };

  const handleDelete = async () => {
    const result = await deleteCameraman(id as string);
    if (result.status === 200) {
      redirect(id as string);
    }
  };

  const redirect = (id: string) => {
    return navigate(`/deleted-cameraman/${id}`);
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loaded === null) {
    return (
      <div className="spacing-y-4 flex h-screen flex-col items-center justify-center">
        <h2 className="text-4xl font-bold">Cameraman Not Found</h2>
      </div>
    );
  }

  if (!loaded)
    return <h1 className="text-xl font-semibold">Loading cameraman...</h1>;

  return (
    <section>
      <h2 className="text-2xl font-bold">Cameraman ID: {id}</h2>
      <p>Name: {cameraman?.name}</p>
      <p>Salary: {cameraman?.salary}</p>
      <p>Camera: {cameraman?.camera}</p>
      <div className="mt-2 space-x-3">
        <Link to={`/update-cameraman/${id}`}>
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
                cameraman from our servers.
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

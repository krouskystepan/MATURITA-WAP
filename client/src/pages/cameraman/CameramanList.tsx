import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllCameramans } from "@/models/Cameraman";
import { ICameramanForm } from "@/types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * This component displays a list of cameramans fetched from the server.
 */
export default function CameramanList() {
  const [cameramans, setCameramans] = useState<ICameramanForm[]>([]);
  const [loaded, setLoaded] = useState<boolean | null>(false);

  /**
   * Function to load cameramans from the server.
   */
  const load = async () => {
    const data = await getAllCameramans();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setCameramans(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <div className="spacing-y-4 flex h-screen flex-col items-center justify-center">
        <h2 className="text-4xl font-bold">Cameramans Not Found</h2>
      </div>
    );
  }

  if (!loaded)
    return <h1 className="text-xl font-semibold">Loading cameraman...</h1>;

  return (
    <section className="grid grid-flow-row-dense grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {cameramans.map((cameraman) => (
        <Card key={cameraman._id}>
          <CardHeader>
            <CardTitle>{cameraman.name}</CardTitle>
            <CardDescription className="break-all">
              {cameraman._id}
            </CardDescription>
          </CardHeader>
          <CardContent>Salary: {cameraman.salary}</CardContent>
          <CardContent>Camera: {cameraman.camera}</CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Link to={`/cameraman/${cameraman._id}`}>
              <Button className="bg-blue-600 text-white hover:bg-blue-600/90">
                View
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}

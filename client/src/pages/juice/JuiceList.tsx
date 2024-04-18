import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllJuices } from "@/models/Juice";
import { IJuiceForm } from "@/types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * This component displays a list of juices fetched from the server.
 */
export default function JuiceList() {
  const [juices, setJuices] = useState<IJuiceForm[]>([]);
  const [loaded, setLoaded] = useState<boolean | null>(false);

  /**
   * Function to load juices from the server.
   */
  const load = async () => {
    const data = await getAllJuices();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setJuices(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <div className="spacing-y-4 flex h-screen flex-col items-center justify-center">
        <h2 className="text-4xl font-bold">Juices Not Found</h2>
      </div>
    );
  }

  if (!loaded)
    return <h1 className="text-xl font-semibold">Loading juice...</h1>;

  return (
    <section className="grid grid-flow-row-dense grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {juices.map((juice) => (
        <Card key={juice._id}>
          <CardHeader>
            <CardTitle>{juice.company}</CardTitle>
            <CardDescription className="break-all">{juice._id}</CardDescription>
          </CardHeader>
          <CardContent>Type: {juice.type}</CardContent>
          <CardContent>Price: {juice.price}</CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Link to={`/juice/${juice._id}`}>
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

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllFastFoods } from "@/models/FastFood";
import { IFastFoodForm } from "@/types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * This component displays a list of fastFoods fetched from the server.
 */
export default function FastFoodList() {
  const [fastFoods, setFastFoods] = useState<IFastFoodForm[]>([]);
  const [loaded, setLoaded] = useState<boolean | null>(false);

  /**
   * Function to load fastFoods from the server.
   */
  const load = async () => {
    const data = await getAllFastFoods();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setFastFoods(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <div className="spacing-y-4 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold">Žádné fastfoody nebyly nalezeny</h2>
      </div>
    );
  }

  if (!loaded)
    return <h1 className="text-xl font-semibold">Načítám fastfoody...</h1>;

  return (
    <section className="grid grid-flow-row-dense grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {fastFoods.map((fastFood) => (
        <Card key={fastFood._id}>
          <CardHeader>
            <CardTitle>Firma: {fastFood.company}</CardTitle>
            <CardDescription className="break-all">
              {fastFood._id}
            </CardDescription>
          </CardHeader>
          <CardContent>Menu: {fastFood.menu}</CardContent>
          <CardContent>Cena za objednávku: {fastFood.price}</CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Link to={`/fastFood/${fastFood._id}`}>
              <Button className="bg-blue-600 text-white hover:bg-blue-600/90">
                Prohlédnout
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}

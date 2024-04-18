/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { getAllData } from "@/models";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * This component represents the home page of the client side of the Maturita project.
 */
export default function Home() {
  const [data, setData] = useState<any>();
  const [loaded, setLoaded] = useState<boolean | null>(false);

  /**
   * Function to load data from the server.
   */
  const load = async () => {
    const data = await getAllData();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setData(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <div className="spacing-y-4 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold">Žádné inzeraty nebyly nalezeny</h2>
      </div>
    );
  }

  if (!loaded) return <h1 className="text-xl font-semibold">Načítám...</h1>;

  const notFoundItems =
    !data.wizard.length &&
    !data.juice.length &&
    !data.fastFood.length &&
    !data.cameraman.length;

  return (
    <section className="flex flex-col gap-5">
      {data.wizard.length > 0 && (
        <div>
          <h1 className="text-2xl font-bold">Čarodějové</h1>
          <div className="grid grid-flow-row-dense grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.wizard.map((wizard: any) => (
              <Card key={wizard._id}>
                <CardHeader>
                  <CardTitle>Jméno: {wizard.name}</CardTitle>
                  <CardDescription className="break-all">
                    {wizard._id}
                  </CardDescription>
                </CardHeader>
                <CardContent>Hůlka: {wizard.stick}</CardContent>
                <CardContent>Věk: {wizard.age}</CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Link to={`/wizard/${wizard._id}`}>
                    <Button className="bg-blue-600 text-white hover:bg-blue-600/90">
                      Prohlédnout
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}
      {data.juice.length > 0 && (
        <div>
          <h1 className="text-2xl font-bold">Džusy</h1>
          <div className="grid grid-flow-row-dense grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.juice.map((juice: any) => (
              <Card key={juice._id}>
                <CardHeader>
                  <CardTitle>Firma: {juice.company}</CardTitle>
                  <CardDescription className="break-all">
                    {juice._id}
                  </CardDescription>
                </CardHeader>
                <CardContent>Typ džusu: {juice.type}</CardContent>
                <CardContent>Cena za kus: {juice.price}</CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Link to={`/juice/${juice._id}`}>
                    <Button className="bg-blue-600 text-white hover:bg-blue-600/90">
                      Prohlédnout
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}
      {data.fastFood.length > 0 && (
        <div>
          <h1 className="text-2xl font-bold">FastFoody</h1>
          <div className="grid grid-flow-row-dense grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.fastFood.map((fastFood: any) => (
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
          </div>
        </div>
      )}
      {data.cameraman.length > 0 && (
        <div>
          <h1 className="text-2xl font-bold">Fotografové</h1>
          <div className="grid grid-flow-row-dense grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.cameraman.map((cameraman: any) => (
              <Card key={cameraman._id}>
                <CardHeader>
                  <CardTitle>Jméno: {cameraman.name}</CardTitle>
                  <CardDescription className="break-all">
                    {cameraman._id}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Požadovaný plat: {cameraman.salary} Kč
                </CardContent>
                <CardContent>Kamera: {cameraman.camera}</CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Link to={`/cameraman/${cameraman._id}`}>
                    <Button className="bg-blue-600 text-white hover:bg-blue-600/90">
                      Prohlédnout
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}
      {notFoundItems && (
        <div className="spacing-y-4 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold">Žádné inzeraty nebyly nalezeny</h2>
        </div>
      )}
    </section>
  );
}

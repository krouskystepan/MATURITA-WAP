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
      <div className="spacing-y-4 flex h-screen flex-col items-center justify-center">
        <h2 className="text-4xl font-bold">Not Found</h2>
      </div>
    );
  }

  if (!loaded) return <h1 className="text-xl font-semibold">Loading...</h1>;

  console.log(data?.wizard);

  return (
    <section className="grid grid-flow-row-dense grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div>
        <h1>Wizards</h1>
        {data.wizard.length ? (
          data?.wizard.map((wizard: any) => (
            <Card key={wizard._id}>
              <CardHeader>
                <CardTitle>{wizard.name}</CardTitle>
                <CardDescription className="break-all">
                  {wizard._id}
                </CardDescription>
              </CardHeader>
              <CardContent>Stick: {wizard.stick}</CardContent>
              <CardContent>Age: {wizard.age}</CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Link to={`/wizard/${wizard._id}`}>
                  <Button className="bg-blue-600 text-white hover:bg-blue-600/90">
                    View
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p>Wizards Not Found</p>
        )}
      </div>
      <div>
        <h1>Juices</h1>
        {data.juice.length ? (
          data?.juice.map((juice: any) => (
            <Card key={juice._id}>
              <CardHeader>
                <CardTitle>{juice.company}</CardTitle>
                <CardDescription className="break-all">
                  {juice._id}
                </CardDescription>
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
          ))
        ) : (
          <p>Wizards Not Found</p>
        )}
      </div>
      <div>
        <h1>Fast Food</h1>
        {data.fastFood.length ? (
          data?.fastFood.map((fastFood: any) => (
            <Card key={fastFood._id}>
              <CardHeader>
                <CardTitle>{fastFood.company}</CardTitle>
                <CardDescription className="break-all">
                  {fastFood._id}
                </CardDescription>
              </CardHeader>
              <CardContent>Menu: {fastFood.menu}</CardContent>
              <CardContent>Price: {fastFood.price}</CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Link to={`/fastFood/${fastFood._id}`}>
                  <Button className="bg-blue-600 text-white hover:bg-blue-600/90">
                    View
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p>FastFoods Not Found</p>
        )}
      </div>
      <div>
        <h1>Cameramans</h1>
        {data.cameraman.length ? (
          data?.cameraman.map((cameraman: any) => (
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
          ))
        ) : (
          <p>Cameramans Not Found</p>
        )}
      </div>
    </section>
  );
}

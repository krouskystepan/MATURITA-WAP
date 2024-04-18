import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllWizards } from "@/models/Wizard";
import { IWizardForm } from "@/types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * This component displays a list of wizards fetched from the server.
 */
export default function WizardList() {
  const [wizards, setWizards] = useState<IWizardForm[]>([]);
  const [loaded, setLoaded] = useState<boolean | null>(false);

  /**
   * Function to load wizards from the server.
   */
  const load = async () => {
    const data = await getAllWizards();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setWizards(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <div className="spacing-y-4 flex h-screen flex-col items-center justify-center">
        <h2 className="text-4xl font-bold">Wizards Not Found</h2>
      </div>
    );
  }

  if (!loaded)
    return <h1 className="text-xl font-semibold">Loading wizard...</h1>;

  return (
    <section className="grid grid-flow-row-dense grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {wizards.map((wizard) => (
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
      ))}
    </section>
  );
}

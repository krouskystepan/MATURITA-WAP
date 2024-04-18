import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { getWizardById, updateWizard } from "@/models/Wizard";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { WizardFormSchema } from "@/types/zod/schemas";

/**
 * This component displays a form to update wizard information based on the provided ID.
 */
export default function UpdateWizardForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState<boolean | null>(false);

  const form = useForm<z.infer<typeof WizardFormSchema>>({
    resolver: zodResolver(WizardFormSchema),
    defaultValues: async () => {
      const data = await getWizardById(id!);
      if (data.status === 500 || data.status === 404) {
        setLoaded(null);
        return {
          name: "",
          stick: "",
          age: "" as unknown as number,
        };
      }
      setLoaded(true);
      return {
        name: data && data.payload.name!,
        stick: data && data.payload.stick!,
        age: data && data.payload.age!,
      };
    },
  });

  const onSubmit = async (values: z.infer<typeof WizardFormSchema>) => {
    try {
      const wizard = await updateWizard(id!, values);

      console.log(wizard);
      if (wizard.status === 201) {
        redirectToSuccessPage(wizard.payload._id);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  const redirectToSuccessPage = (id: number) => {
    navigate(`/updated-wizard/${id}`);
  };

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
    <Form {...form}>
      <form className="max-w-96 space-y-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Jmnéno</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="stick"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hůlka</FormLabel>
              <FormControl>
                <Input placeholder="Nejlepsi" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age"
          defaultValue={undefined}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Věk</FormLabel>
              <FormControl>
                <Input type="number" placeholder="33" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-2 flex justify-end">
          <Button onClick={form.handleSubmit(onSubmit)}>Aktualizovat</Button>
        </div>
      </form>
    </Form>
  );
}

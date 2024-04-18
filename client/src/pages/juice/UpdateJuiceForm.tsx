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

import { getJuiceById, updateJuice } from "@/models/Juice";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { JuiceFormSchema } from "@/types/zod/schemas";

/**
 * This component displays a form to update juice information based on the provided ID.
 */
export default function UpdateJuiceForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState<boolean | null>(false);

  const form = useForm<z.infer<typeof JuiceFormSchema>>({
    resolver: zodResolver(JuiceFormSchema),
    defaultValues: async () => {
      const data = await getJuiceById(id!);
      if (data.status === 500 || data.status === 404) {
        setLoaded(null);
        return {
          company: "",
          type: "",
          price: "" as unknown as number,
        };
      }
      setLoaded(true);
      return {
        company: data && data.payload.company!,
        type: data && data.payload.type!,
        price: data && data.payload.price!,
      };
    },
  });

  const onSubmit = async (values: z.infer<typeof JuiceFormSchema>) => {
    try {
      const juice = await updateJuice(id!, values);

      console.log(juice);
      if (juice.status === 201) {
        redirectToSuccessPage(juice.payload._id);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  const redirectToSuccessPage = (id: number) => {
    navigate(`/updated-juice/${id}`);
  };

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
    <Form {...form}>
      <form className="max-w-96 space-y-2">
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Firma</FormLabel>
              <FormControl>
                <Input placeholder="Relax" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Typ džusu</FormLabel>
              <FormControl>
                <Input placeholder="Jablko" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          defaultValue={undefined}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cena za kus</FormLabel>
              <FormControl>
                <Input type="number" placeholder="25" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-2 flex justify-end">
          <Button onClick={form.handleSubmit(onSubmit)}>Submit</Button>
        </div>
      </form>
    </Form>
  );
}

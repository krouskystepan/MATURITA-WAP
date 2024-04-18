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

import { getFastFoodById, updateFastFood } from "@/models/FastFood";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { FastFoodFormSchema } from "@/types/zod/schemas";

/**
 * This component displays a form to update fastFood information based on the provided ID.
 */
export default function UpdateFastFoodForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState<boolean | null>(false);

  const form = useForm<z.infer<typeof FastFoodFormSchema>>({
    resolver: zodResolver(FastFoodFormSchema),
    defaultValues: async () => {
      const data = await getFastFoodById(id!);
      if (data.status === 500 || data.status === 404) {
        setLoaded(null);
        return {
          company: "",
          menu: "",
          price: "" as unknown as number,
        };
      }
      setLoaded(true);
      return {
        company: data && data.payload.company!,
        menu: data && data.payload.menu!,
        price: data && data.payload.price!,
      };
    },
  });

  const onSubmit = async (values: z.infer<typeof FastFoodFormSchema>) => {
    try {
      const fastFood = await updateFastFood(id!, values);

      console.log(fastFood);
      if (fastFood.status === 201) {
        redirectToSuccessPage(fastFood.payload._id);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  const redirectToSuccessPage = (id: number) => {
    navigate(`/updated-fastFood/${id}`);
  };

  if (loaded === null) {
    return (
      <div className="spacing-y-4 flex h-screen flex-col items-center justify-center">
        <h2 className="text-4xl font-bold">FastFood Not Found</h2>
      </div>
    );
  }

  if (!loaded)
    return <h1 className="text-xl font-semibold">Loading fastFood...</h1>;

  return (
    <Form {...form}>
      <form className="max-w-96 space-y-2">
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="kfc" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="menu"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stick</FormLabel>
              <FormControl>
                <Input placeholder="Wrap" {...field} />
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
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input type="number" placeholder="125" {...field} />
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

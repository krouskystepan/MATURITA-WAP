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

import { createFastFood } from "@/models/FastFood";
import { useNavigate } from "react-router-dom";
import { FastFoodFormSchema } from "@/types/zod/schemas";

/**
 * Component form for creating a new fastFood
 */
export default function CreateFastFoodForm() {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof FastFoodFormSchema>>({
    resolver: zodResolver(FastFoodFormSchema),
    defaultValues: {
      company: "",
      menu: "",
      price: "" as unknown as number,
    },
  });

  const onSubmit = async (values: z.infer<typeof FastFoodFormSchema>) => {
    try {
      const fastFood = await createFastFood(values);
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
    navigate(`/created-fastFood/${id}`);
  };

  return (
    <Form {...form}>
      <form className="max-w-96 space-y-2">
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comapny</FormLabel>
              <FormControl>
                <Input placeholder="McDonald" {...field} />
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
              <FormLabel>Menu</FormLabel>
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
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input type="number" placeholder="150" {...field} />
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

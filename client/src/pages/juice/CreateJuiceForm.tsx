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

import { createJuice } from "@/models/Juice";
import { useNavigate } from "react-router-dom";
import { JuiceFormSchema } from "@/types/zod/schemas";

/**
 * Component form for creating a new juice
 */
export default function CreateJuiceForm() {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof JuiceFormSchema>>({
    resolver: zodResolver(JuiceFormSchema),
    defaultValues: {
      company: "",
      type: "",
      price: "" as unknown as number,
    },
  });

  const onSubmit = async (values: z.infer<typeof JuiceFormSchema>) => {
    try {
      const juice = await createJuice(values);
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
    navigate(`/created-juice/${id}`);
  };

  return (
    <Form {...form}>
      <form className="max-w-96 space-y-2">
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
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
              <FormLabel>Type</FormLabel>
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
              <FormLabel>Price</FormLabel>
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

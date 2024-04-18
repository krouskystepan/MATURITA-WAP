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

import { createWizard } from "@/models/Wizard";
import { useNavigate } from "react-router-dom";
import { WizardFormSchema } from "@/types/zod/schemas";

/**
 * Component form for creating a new wizard
 */
export default function CreateWizardForm() {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof WizardFormSchema>>({
    resolver: zodResolver(WizardFormSchema),
    defaultValues: {
      name: "",
      stick: "",
      age: "" as unknown as number,
    },
  });

  const onSubmit = async (values: z.infer<typeof WizardFormSchema>) => {
    try {
      const wizard = await createWizard(values);
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
    navigate(`/created-wizard/${id}`);
  };

  return (
    <Form {...form}>
      <form className="max-w-96 space-y-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
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
              <FormLabel>Stick</FormLabel>
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
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input type="number" placeholder="33" {...field} />
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

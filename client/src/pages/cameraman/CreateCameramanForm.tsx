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

import { createCameraman } from "@/models/Cameraman";
import { useNavigate } from "react-router-dom";
import { CameramanFormSchema } from "@/types/zod/schemas";

/**
 * Component form for creating a new cameraman
 */
export default function CreateCameramanForm() {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof CameramanFormSchema>>({
    resolver: zodResolver(CameramanFormSchema),
    defaultValues: {
      name: "",
      salary: "" as unknown as number,
      camera: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof CameramanFormSchema>) => {
    try {
      const cameraman = await createCameraman(values);
      if (cameraman.status === 201) {
        redirectToSuccessPage(cameraman.payload._id);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  const redirectToSuccessPage = (id: number) => {
    navigate(`/created-cameraman/${id}`);
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
          name="salary"
          defaultValue={undefined}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Salary</FormLabel>
              <FormControl>
                <Input type="number" placeholder="15000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="camera"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Camera</FormLabel>
              <FormControl>
                <Input placeholder="Canon 8k" {...field} />
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

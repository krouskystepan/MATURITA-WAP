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

import { getCameramanById, updateCameraman } from "@/models/Cameraman";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { CameramanFormSchema } from "@/types/zod/schemas";

/**
 * This component displays a form to update cameraman information based on the provided ID.
 */
export default function UpdateCameramanForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState<boolean | null>(false);

  const form = useForm<z.infer<typeof CameramanFormSchema>>({
    resolver: zodResolver(CameramanFormSchema),
    defaultValues: async () => {
      const data = await getCameramanById(id!);
      if (data.status === 500 || data.status === 404) {
        setLoaded(null);
        return {
          name: "",
          salary: "" as unknown as number,
          camera: "",
        };
      }
      setLoaded(true);
      return {
        name: data && data.payload.name!,
        salary: data && data.payload.salary!,
        camera: data && data.payload.camera!,
      };
    },
  });

  const onSubmit = async (values: z.infer<typeof CameramanFormSchema>) => {
    try {
      const cameraman = await updateCameraman(id!, values);

      console.log(cameraman);
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
    navigate(`/updated-cameraman/${id}`);
  };

  if (loaded === null) {
    return (
      <div className="spacing-y-4 flex h-screen flex-col items-center justify-center">
        <h2 className="text-4xl font-bold">Cameraman Not Found</h2>
      </div>
    );
  }

  if (!loaded)
    return <h1 className="text-xl font-semibold">Loading cameraman...</h1>;

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
                <Input type="number" placeholder="1500" {...field} />
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

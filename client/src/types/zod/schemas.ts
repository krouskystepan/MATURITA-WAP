import { z } from "zod";

/**
 * Schemas for form validation
 */

export const UserFormSchema = z.object({
  firstName: z.string().min(1, "Please enter a valid value"),
  lastName: z.string().min(1, "Please enter a valid value"),
  age: z.coerce.number().positive("Please enter a valid number"),
});

export const WizardFormSchema = z.object({
  name: z.string().min(1, "Please enter a valid value"),
  stick: z.string().min(1, "Please enter a valid value"),
  age: z.coerce.number().positive("Please enter a valid number"),
});

export const JuiceFormSchema = z.object({
  company: z.string().min(1, "Please enter a valid value"),
  type: z.string().min(1, "Please enter a valid value"),
  price: z.coerce.number().positive("Please enter a valid number"),
});

export const FastFoodFormSchema = z.object({
  company: z.string().min(1, "Please enter a valid value"),
  menu: z.string().min(1, "Please enter a valid value"),
  price: z.coerce.number().positive("Please enter a valid number"),
});

export const CameramanFormSchema = z.object({
  name: z.string().min(1, "Please enter a valid value"),
  salary: z.coerce.number().positive("Please enter a valid number"),
  camera: z.string().min(1, "Please enter a valid value"),
});

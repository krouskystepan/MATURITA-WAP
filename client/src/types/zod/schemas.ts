import { z } from "zod";

/**
 * Schemas for form validation
 */

export const UserFormSchema = z.object({
  firstName: z.string().min(1, "Please enter a valid value"),
  lastName: z.string().min(1, "Please enter a valid value"),
  age: z.coerce.number().positive("Please enter a valid number"),
});

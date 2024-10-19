import { z } from "zod";

export const ClientDetailsSchema = z.object({
  client: z.object({
    max_bw: z.number(),
    bw_setByAdmin: z.number(),
    _id: z.string(),
    name: z.string(),
    mail: z.string().email(),
    isAdmin: z.boolean(),
    createdAt: z.string().datetime(), // Can also use z.string() if datetime validation is not needed
    updatedAt: z.string().datetime(),
  }),
  history: z.array(
    z.object({
      createdAt: z.string().date(), // Assumes dates in "YYYY-MM-DD" format, adjust if needed
      requested_bw: z.number(),
      allocated_bw: z.number(),
    })
  )
});

export type ClientDetailsSchemaType = z.infer<typeof ClientDetailsSchema>;

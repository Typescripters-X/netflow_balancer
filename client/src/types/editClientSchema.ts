import { z } from "zod";

export const EditClientDetailsSchema = z.object({
    max_bw: z.number().optional(),
    bw_setByAdmin: z.number().optional(),
    _id: z.string().optional(),
    name: z.string().optional(),
    mail: z.string().email().optional(),
    isAdmin: z.boolean().optional(),
    createdAt: z.string().datetime().optional(), // Can also use z.string() if datetime validation is not needed
    updatedAt: z.string().datetime().optional(),
});

export type editClientDetailsSchemaType = z.infer<typeof EditClientDetailsSchema>;

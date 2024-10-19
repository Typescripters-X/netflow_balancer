import { z } from "zod";

export const ClientScehma = z.object({
    bw_setByAdmin: z.number(),
    createdAt: z.string(),
    isAdmin: z.boolean(),
    mail: z.string().email(),
    max_bw: z.string(),
    name: z.string(),
    updatedAt: z.string().date(),
    _id: z.string(),
});


export type clientSchemaType = z.infer<typeof ClientScehma>;


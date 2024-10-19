import { z } from "zod";


export const UserScehma = z.object({
    id: z.string(),
    isAdmin: z.boolean(),
    mail: z.string().email(),
    name: z.string(),
});


export type userSchemaType = z.infer<typeof UserScehma>;
import { z } from "zod";


export const LoginScehma = z.object({
    mail: z.string().email(),
    password: z.string(),
});


export type loginSchemaType = z.infer<typeof LoginScehma>;
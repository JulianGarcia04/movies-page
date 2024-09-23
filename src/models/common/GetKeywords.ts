import { z } from "zod";

export const GetKeywordsResponseSchema = z.object({
  id: z.number(),
  keywords: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
    }),
  ),
});

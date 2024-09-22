import { z } from "zod";

const EnvSchema = z.object({
  MOVIES_API_KEY: z.string(),
});

type Env = z.infer<typeof EnvSchema>;

export let env: Env;

try {
  env = EnvSchema.parse({
    MOVIES_API_KEY: process.env.NEXT_PUBLIC_MOVIES_API_KEY,
  });
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(error);
}

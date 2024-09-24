import { z } from "zod";

const EnvSchema = z.object({
  MOVIES_API_KEY: z.string(),
  CUSTOM_API_URL: z.string().url(),
});

type Env = z.infer<typeof EnvSchema>;

export let env: Env;

try {
  env = EnvSchema.parse({
    MOVIES_API_KEY: process.env.NEXT_PUBLIC_MOVIES_API_KEY,
    CUSTOM_API_URL: process.env.NEXT_PUBLIC_CUSTOM_API_URL,
  });
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(error);
}

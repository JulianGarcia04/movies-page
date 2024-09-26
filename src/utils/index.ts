import { z, ZodType } from "zod";
import { getCookie } from "cookies-next";
import { OptionsType } from "cookies-next/lib/types";

export function validateSingleProperty<T extends object>(
  obj: T,
): { key: keyof T; value: T[keyof T] } | null {
  const keys = Object.keys(obj) as Array<keyof T>;

  if (keys.length !== 1) {
    return null;
  }

  const key = keys[0];
  return { key, value: obj[key] };
}

export function getVerifyCookie<T extends ZodType>(
  key: string,
  schema: T,
  options?: OptionsType,
): z.infer<T> | null {
  try {
    const cookie = getCookie(key, options);

    const rawDataString = cookie;

    if (!rawDataString) {
      return null;
    }

    const rawData = JSON.parse(rawDataString);

    const data: unknown = schema.parse({ ...rawData });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data as z.infer<T>;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);

    return null;
  }
}

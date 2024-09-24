"use server";

import { UserRequestSchema } from "@/models/User";
import { custom_api } from "@/utils/axios";

export const action = async (formData: FormData): Promise<void> => {
  try {
    const rawFormData = Object.fromEntries(formData.entries());

    const newUser = UserRequestSchema.parse(rawFormData);

    await custom_api.post("/users/create", newUser);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw "Error when it was creating new user";
  }
};

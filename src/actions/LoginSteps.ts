"use server";

import {
  LoginFirstStepRequestSchema,
  LoginFirstStepResponseSchema,
  LoginFirstStepResponse,
  LoginSecondStepRequestSchema,
  LoginSecondStepResponseSchema,
} from "@/models/common/Login";
import { custom_api } from "@/utils/axios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const LoginFirstStep = async (
  formData: FormData,
): Promise<LoginFirstStepResponse> => {
  try {
    const rawFormData = Object.fromEntries(formData.entries());

    const body = LoginFirstStepRequestSchema.parse(rawFormData);

    const req = await custom_api.post("auth/login", body);

    const data = LoginFirstStepResponseSchema.parse(req.data);

    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw "Error on first login step";
  }
};

export const LoginSecondStep = async (formData: FormData): Promise<void> => {
  try {
    const cookieStore = cookies();

    const rawFormData = Object.fromEntries(formData.entries());

    // eslint-disable-next-line no-console
    console.log(rawFormData);

    const body = LoginSecondStepRequestSchema.parse(rawFormData);

    // eslint-disable-next-line no-console
    console.log(body);

    const req = await custom_api.post("/auth/login/verify", body);

    const data = LoginSecondStepResponseSchema.parse(req.data);

    cookieStore.set("auth", JSON.stringify(data));

    revalidatePath("/", "layout");
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw "Error on second login step";
  }
};

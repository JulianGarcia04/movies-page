"use server";

// import { LoginSecondStepResponseSchema } from "@/models/common/Login";
// import { getVerifyCookie } from "@/utils";
import { custom_api } from "@/utils/axios";
import { revalidatePath } from "next/cache";

export const addFavoriteMovieAction = async (
  movieID: number,
): Promise<void> => {
  try {
    await custom_api.post(`/favorites/add/${movieID}`);

    revalidatePath("/", "layout");
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);

    throw "Error trying to set a favorite movie";
  }
};

export const deleteFavoriteMovieAction = async (
  movieID: number,
): Promise<void> => {
  try {
    await custom_api.delete(`/favorites/delete/${movieID}`);

    revalidatePath("/", "layout");
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);

    throw "Error trying to set a favorite movie";
  }
};

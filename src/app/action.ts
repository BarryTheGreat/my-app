"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function AddUser(formData: FormData) {
  const prisma = new PrismaClient();
  const data = {
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
  };

  try {
    await prisma.user.create({
      data: {
        firstname: data.firstname as string,
        lastname: data.lastname as string,
        email: data.email as string,
      },
    });
    revalidatePath("/");
    console.log("done");
  } catch (error) {
    console.log("error");
  }
}

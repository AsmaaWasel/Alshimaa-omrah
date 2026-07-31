"use server";

import { put, del } from "@vercel/blob";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function uploadImage(formData: FormData) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user) throw new Error("Unauthorized");

  const file = formData.get("file") as File;
  if (!file) throw new Error("No file provided");

  try {
    const blob = await put(
      `admin/${session.user.id}/${Date.now()}-${file.name}`,
      file,
      {
        access: "private",
      },
    );
    return { url: blob.url, success: true };
  } catch (error) {
    console.error("Upload error:", error);
    throw new Error("Failed to upload image");
  }
}

export async function deleteImage(url: string) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user) throw new Error("Unauthorized");

  try {
    await del(url);
    return { success: true };
  } catch (error) {
    console.error("Delete error:", error);
    throw new Error("Failed to delete image");
  }
}

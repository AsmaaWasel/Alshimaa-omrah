"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { buses, busImages, busVideos } from "@/lib/db/schema";
import { and, desc, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

async function uploadFile(file: File) {
  const data = new FormData();
  data.append("file", file);

  const response = await fetch(`${process.env.BETTER_AUTH_URL}/api/upload`, {
    method: "POST",
    body: data,
  });

  if (!response.ok) {
    throw new Error("Upload failed");
  }

  const result = await response.json();

  return result.url as string;
}

async function getUserId() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  return session.user.id;
}

// ===================== Buses =====================

export async function getBuses() {
  const userId = await getUserId();

  const result = await db
    .select()
    .from(buses)
    .where(eq(buses.userId, userId))
    .orderBy(desc(buses.createdAt));

  return await Promise.all(
    result.map(async (bus) => {
      const images = await db
        .select()
        .from(busImages)
        .where(eq(busImages.busId, bus.id));

      const videos = await db
        .select()
        .from(busVideos)
        .where(eq(busVideos.busId, bus.id));

      return {
        ...bus,
        images,
        videos,
      };
    }),
  );
}
export async function getBusById(id: number) {
  const userId = await getUserId();

  const bus = await db
    .select()
    .from(buses)
    .where(and(eq(buses.id, id), eq(buses.userId, userId)))
    .limit(1);

  if (!bus.length) {
    throw new Error("Bus not found");
  }

  const images = await db
    .select()
    .from(busImages)
    .where(eq(busImages.busId, id));

  const videos = await db
    .select()
    .from(busVideos)
    .where(eq(busVideos.busId, id));

  return {
    ...bus[0],
    images,
    videos,
  };
}

export async function createBus(formData: FormData) {
  const userId = await getUserId();

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const busType = formData.get("busType") as string;

  if (!title) {
    throw new Error("Bus title is required");
  }

  const result = await db
    .insert(buses)
    .values({
      userId,
      title,
      description: description || "",
      busType: busType || "economic",
    })
    .returning();

  const bus = result[0];

  // Upload Images
  const images = formData.getAll("images") as File[];

  for (const image of images) {
    if (!(image instanceof File) || image.size === 0) continue;

    const imageUrl = await uploadFile(image);

    await db.insert(busImages).values({
      busId: bus.id,
      userId,
      imageUrl,
    });
  }

  // Upload Videos
  const videos = formData.getAll("videos") as File[];

  for (const video of videos) {
    if (!(video instanceof File) || video.size === 0) continue;

    const videoUrl = await uploadFile(video);

    await db.insert(busVideos).values({
      busId: bus.id,
      userId,
      videoUrl,
    });
  }

  revalidatePath("/dashboard/buses");

  return bus;
}

export async function updateBus(id: number, formData: FormData) {
  const userId = await getUserId();

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const busType = formData.get("busType") as string;

  const result = await db
    .update(buses)
    .set({
      title,
      description: description || "",
      busType: busType || "economic",
      updatedAt: new Date(),
    })
    .where(and(eq(buses.id, id), eq(buses.userId, userId)))
    .returning();

  // Upload new Images
  const images = formData.getAll("images") as File[];

  for (const image of images) {
    if (!(image instanceof File) || image.size === 0) continue;

    const imageUrl = await uploadFile(image);

    await db.insert(busImages).values({
      busId: id,
      userId,
      imageUrl,
    });
  }

  // Upload new Videos
  const videos = formData.getAll("videos") as File[];

  for (const video of videos) {
    if (!(video instanceof File) || video.size === 0) continue;

    const videoUrl = await uploadFile(video);

    await db.insert(busVideos).values({
      busId: id,
      userId,
      videoUrl,
    });
  }

  revalidatePath("/dashboard/buses");

  return result[0];
}

export async function deleteBus(id: number) {
  const userId = await getUserId();

  await db.delete(busImages).where(eq(busImages.busId, id));

  await db.delete(busVideos).where(eq(busVideos.busId, id));

  await db.delete(buses).where(and(eq(buses.id, id), eq(buses.userId, userId)));

  revalidatePath("/dashboard/buses");
}

// ===================== Images =====================

export async function getBusImages(busId: number) {
  const userId = await getUserId();

  return await db
    .select()
    .from(busImages)
    .where(and(eq(busImages.busId, busId), eq(busImages.userId, userId)));
}

export async function addBusImage(data: {
  busId: number;
  imageUrl: string;
  altText?: string;
}) {
  const userId = await getUserId();

  const result = await db
    .insert(busImages)
    .values({
      busId: data.busId,
      userId,
      imageUrl: data.imageUrl,
      altText: data.altText || null,
    })
    .returning();

  revalidatePath("/dashboard/buses");

  return result[0];
}

export async function deleteBusImage(imageId: number) {
  const userId = await getUserId();

  await db
    .delete(busImages)
    .where(and(eq(busImages.id, imageId), eq(busImages.userId, userId)));

  revalidatePath("/dashboard/buses");
}

// ===================== Videos =====================

export async function getBusVideos(busId: number) {
  const userId = await getUserId();

  return await db
    .select()
    .from(busVideos)
    .where(and(eq(busVideos.busId, busId), eq(busVideos.userId, userId)));
}

export async function addBusVideo(data: { busId: number; videoUrl: string }) {
  const userId = await getUserId();

  const result = await db
    .insert(busVideos)
    .values({
      busId: data.busId,
      userId,
      videoUrl: data.videoUrl,
    })
    .returning();

  revalidatePath("/dashboard/buses");

  return result[0];
}

export async function deleteBusVideo(videoId: number) {
  const userId = await getUserId();

  await db
    .delete(busVideos)
    .where(and(eq(busVideos.id, videoId), eq(busVideos.userId, userId)));

  revalidatePath("/dashboard/buses");
}

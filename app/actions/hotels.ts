"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { uploadFile } from "@/lib/upload";

import {
  hotels,
  hotelImages,
  hotelVideos,
  hotelFeatures,
} from "@/lib/db/schema";

import { and, desc, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

async function getUserId() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  return session.user.id;
}

// ================= GET ALL =================

export async function getHotels() {
  const userId = await getUserId();

  const allHotels = await db
    .select()
    .from(hotels)
    .where(eq(hotels.userId, userId))
    .orderBy(desc(hotels.createdAt));

  const result = await Promise.all(
    allHotels.map(async (hotel) => {
      const images = await db
        .select()
        .from(hotelImages)
        .where(eq(hotelImages.hotelId, hotel.id));

      const videos = await db
        .select()
        .from(hotelVideos)
        .where(eq(hotelVideos.hotelId, hotel.id));

      return {
        ...hotel,
        images,
        videos,
      };
    }),
  );

  return result;
}
// ================= GET BY ID =================

export async function getHotelById(id: number) {
  const userId = await getUserId();

  const hotel = await db
    .select()
    .from(hotels)
    .where(and(eq(hotels.id, id), eq(hotels.userId, userId)))
    .limit(1);

  if (!hotel.length) {
    throw new Error("Hotel not found");
  }

  const images = await db
    .select()
    .from(hotelImages)
    .where(eq(hotelImages.hotelId, id));

  const videos = await db
    .select()
    .from(hotelVideos)
    .where(eq(hotelVideos.hotelId, id));

  return {
    ...hotel[0],
    images,
    videos,
  };
}

// ================= CREATE =================

export async function createHotel(formData: FormData) {
  const userId = await getUserId();

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const location = formData.get("location") as string;

  const stars = Number(formData.get("stars"));

  const packageType = formData.get("packageType") as "vip" | "economic";

  if (!name || !description || !stars || !packageType) {
    throw new Error("Missing hotel data");
  }

  // Create hotel
  const result = await db
    .insert(hotels)
    .values({
      userId,
      name,
      description,
      location,
      stars,
      packageType,
    })
    .returning();

  const hotel = result[0];

  // =====================
  // Upload Images
  // =====================

  const images = formData.getAll("images") as File[];

  for (const image of images) {
    if (!image || image.size === 0) continue;

    const url = await uploadFile(image);

    await db.insert(hotelImages).values({
      hotelId: hotel.id,
      userId,
      imageUrl: url,
    });
  }

  // =====================
  // Upload Videos
  // =====================

  const videos = formData.getAll("videos") as File[];

  for (const video of videos) {
    if (!video || video.size === 0) continue;

    const videoUrl = await uploadFile(video);

    await db.insert(hotelVideos).values({
      hotelId: hotel.id,
      userId,
      videoUrl,
    });
  }

  revalidatePath("/dashboard/hotels");

  return hotel;
}

// ================= UPDATE =================

export async function updateHotel(
  id: number,
  data: {
    name: string;
    description: string;
    location?: string;
    stars: number;
    packageType: "vip" | "economic";
  },
) {
  const userId = await getUserId();

  const result = await db
    .update(hotels)
    .set({
      name: data.name,
      description: data.description,
      location: data.location,
      stars: data.stars,
      packageType: data.packageType,
      updatedAt: new Date(),
    })
    .where(and(eq(hotels.id, id), eq(hotels.userId, userId)))
    .returning();

  revalidatePath("/dashboard/hotels");

  return result[0];
}

// ================= DELETE =================

export async function deleteHotel(id: number) {
  const userId = await getUserId();

  await db.delete(hotelImages).where(eq(hotelImages.hotelId, id));

  await db.delete(hotelVideos).where(eq(hotelVideos.hotelId, id));

  await db.delete(hotelFeatures).where(eq(hotelFeatures.hotelId, id));

  await db
    .delete(hotels)
    .where(and(eq(hotels.id, id), eq(hotels.userId, userId)));

  revalidatePath("/dashboard/hotels");
}

// ================= IMAGES =================

export async function getHotelImages(hotelId: number) {
  const userId = await getUserId();

  return db
    .select()
    .from(hotelImages)
    .where(
      and(eq(hotelImages.hotelId, hotelId), eq(hotelImages.userId, userId)),
    );
}

export async function addHotelImage(data: {
  hotelId: number;
  imageUrl: string;
  altText?: string;
}) {
  const userId = await getUserId();

  const result = await db
    .insert(hotelImages)
    .values({
      hotelId: data.hotelId,
      userId,
      imageUrl: data.imageUrl,
      altText: data.altText,
    })
    .returning();

  revalidatePath(`/dashboard/hotels/${data.hotelId}`);

  return result[0];
}

export async function deleteHotelImage(imageId: number) {
  const userId = await getUserId();

  await db
    .delete(hotelImages)
    .where(and(eq(hotelImages.id, imageId), eq(hotelImages.userId, userId)));

  revalidatePath("/dashboard/hotels");
}

// ================= FEATURES =================

export async function addHotelFeature(data: {
  hotelId: number;
  feature: string;
}) {
  const userId = await getUserId();

  const result = await db
    .insert(hotelFeatures)
    .values({
      hotelId: data.hotelId,
      userId,
      feature: data.feature,
    })
    .returning();

  return result[0];
}

// ================= VIDEOS =================

export async function addHotelVideo(data: {
  hotelId: number;
  videoUrl: string;
}) {
  const userId = await getUserId();

  const result = await db
    .insert(hotelVideos)
    .values({
      hotelId: data.hotelId,
      userId,
      videoUrl: data.videoUrl,
    })
    .returning();

  revalidatePath("/dashboard/hotels");

  return result[0];
}

export async function deleteHotelVideo(id: number) {
  const userId = await getUserId();

  await db
    .delete(hotelVideos)
    .where(and(eq(hotelVideos.id, id), eq(hotelVideos.userId, userId)));

  revalidatePath("/dashboard/hotels");
}

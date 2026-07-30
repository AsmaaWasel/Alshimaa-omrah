"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { hotels, hotelImages } from "@/lib/db/schema";
import { and, desc, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user) throw new Error("Unauthorized");
  return session.user.id;
}

export async function getHotels() {
  const userId = await getUserId();
  return db
    .select()
    .from(hotels)
    .where(eq(hotels.userId, userId))
    .orderBy(desc(hotels.createdAt));
}

export async function getHotelById(id: number) {
  const userId = await getUserId();
  const hotel = await db
    .select()
    .from(hotels)
    .where(and(eq(hotels.id, id), eq(hotels.userId, userId)))
    .limit(1);

  if (!hotel.length) throw new Error("Hotel not found");

  const images = await db
    .select()
    .from(hotelImages)
    .where(eq(hotelImages.hotelId, id));

  return { ...hotel[0], images };
}

export async function createHotel(data: {
  name: string;
  description?: string;
  location: string;
  pricePerNight?: number;
  rating?: string;
  amenities?: string;
}) {
  const userId = await getUserId();
  const result = await db
    .insert(hotels)
    .values({
      userId,
      name: data.name,
      description: data.description,
      location: data.location,
      pricePerNight: data.pricePerNight,
      rating: data.rating,
      amenities: data.amenities,
    })
    .returning();

  revalidatePath("/dashboard/hotels");
  return result[0];
}

export async function updateHotel(
  id: number,
  data: {
    name: string;
    description?: string;
    location: string;
    pricePerNight?: number;
    rating?: string;
    amenities?: string;
  },
) {
  const userId = await getUserId();
  const result = await db
    .update(hotels)
    .set({
      name: data.name,
      description: data.description,
      location: data.location,
      pricePerNight: data.pricePerNight,
      rating: data.rating,
      amenities: data.amenities,
      updatedAt: new Date(),
    })
    .where(and(eq(hotels.id, id), eq(hotels.userId, userId)))
    .returning();

  revalidatePath("/dashboard/hotels");
  return result[0];
}

export async function deleteHotel(id: number) {
  const userId = await getUserId();

  // Delete hotel images first
  await db.delete(hotelImages).where(eq(hotelImages.hotelId, id));

  // Delete hotel
  await db
    .delete(hotels)
    .where(and(eq(hotels.id, id), eq(hotels.userId, userId)));

  revalidatePath("/dashboard/hotels");
}

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

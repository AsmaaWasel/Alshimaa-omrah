"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { buses, busImages } from "@/lib/db/schema";
import { and, desc, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user) throw new Error("Unauthorized");
  return session.user.id;
}

export async function getBuses() {
  const userId = await getUserId();
  return db
    .select()
    .from(buses)
    .where(eq(buses.userId, userId))
    .orderBy(desc(buses.createdAt));
}

export async function getBusById(id: number) {
  const userId = await getUserId();
  const bus = await db
    .select()
    .from(buses)
    .where(and(eq(buses.id, id), eq(buses.userId, userId)))
    .limit(1);

  if (!bus.length) throw new Error("Bus not found");

  const images = await db
    .select()
    .from(busImages)
    .where(eq(busImages.busId, id));

  return { ...bus[0], images };
}

export async function createBus(data: {
  name: string;
  description?: string;
  capacity?: number;
  pricePerSeat?: number;
  features?: string;
}) {
  const userId = await getUserId();
  const result = await db
    .insert(buses)
    .values({
      userId,
      name: data.name,
      description: data.description,
      capacity: data.capacity,
      pricePerSeat: data.pricePerSeat,
      features: data.features,
    })
    .returning();

  revalidatePath("/dashboard/buses");
  return result[0];
}

export async function updateBus(
  id: number,
  data: {
    name: string;
    description?: string;
    capacity?: number;
    pricePerSeat?: number;
    features?: string;
  },
) {
  const userId = await getUserId();
  const result = await db
    .update(buses)
    .set({
      name: data.name,
      description: data.description,
      capacity: data.capacity,
      pricePerSeat: data.pricePerSeat,
      features: data.features,
      updatedAt: new Date(),
    })
    .where(and(eq(buses.id, id), eq(buses.userId, userId)))
    .returning();

  revalidatePath("/dashboard/buses");
  return result[0];
}

export async function deleteBus(id: number) {
  const userId = await getUserId();

  // Delete bus images first
  await db.delete(busImages).where(eq(busImages.busId, id));

  // Delete bus
  await db.delete(buses).where(and(eq(buses.id, id), eq(buses.userId, userId)));

  revalidatePath("/dashboard/buses");
}

export async function getBusImages(busId: number) {
  const userId = await getUserId();
  return db
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
      altText: data.altText,
    })
    .returning();

  revalidatePath(`/dashboard/buses/${data.busId}`);
  return result[0];
}

export async function deleteBusImage(imageId: number) {
  const userId = await getUserId();
  await db
    .delete(busImages)
    .where(and(eq(busImages.id, imageId), eq(busImages.userId, userId)));

  revalidatePath("/dashboard/buses");
}

import { db } from "@/lib/db";
import { hotels } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import HotelForm from "@/components/dashboard/hotels/hotel-form";
import { updateHotel } from "@/app/actions/hotels";

export default async function EditHotelPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const hotelId = Number(id);

  const hotel = await db.query.hotels.findFirst({
    where: eq(hotels.id, hotelId),
  });

  if (!hotel) {
    return <div>الفندق غير موجود</div>;
  }

  async function handleUpdate(formData: FormData) {
    "use server";

    await updateHotel(hotelId, {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      location: formData.get("location") as string,
      stars: Number(formData.get("stars")),
      packageType: formData.get("packageType") as "vip" | "economic",
    });
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">تعديل الفندق</h1>

      <HotelForm initialData={hotel} onSubmit={handleUpdate} />
    </div>
  );
}

"use client";

import HotelForm from "@/components/dashboard/hotels/hotel-form";
import { createHotel } from "@/app/actions/hotels";
import { useRouter } from "next/navigation";

export default function NewHotelPage() {
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    await createHotel(formData);

    router.push("/dashboard/hotels");
    router.refresh();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">إضافة فندق جديد</h1>

      <p className="mt-2 text-gray-500">أضف بيانات الفندق والصور والفيديو</p>

      <HotelForm onSubmit={handleSubmit} />
    </div>
  );
}

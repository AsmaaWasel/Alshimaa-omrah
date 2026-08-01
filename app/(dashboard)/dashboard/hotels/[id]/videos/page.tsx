import { notFound } from "next/navigation";

import { getHotelById } from "@/app/actions/hotels";
import HotelVideosManager from "@/components/dashboard/hotels/hotel-videos-manager";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function HotelVideosPage({ params }: Props) {
  const { id } = await params;

  const hotel = await getHotelById(Number(id));

  if (!hotel) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">إدارة فيديوهات الفندق</h1>

        <p className="mt-2 text-gray-500">{hotel.name}</p>
      </div>

      <HotelVideosManager hotelId={hotel.id} videos={hotel.videos ?? []} />
    </div>
  );
}

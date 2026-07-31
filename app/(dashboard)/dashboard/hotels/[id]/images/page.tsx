import { getHotelById } from "@/app/actions/hotels";
import HotelImagesManager from "@/components/dashboard/hotels/hotel-images-manager";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function HotelImagesPage({ params }: Props) {
  const { id } = await params;

  const hotel = await getHotelById(Number(id));

  return (
    <div className="p-6" dir="rtl">
      <h1 className="text-2xl font-bold mb-6">صور {hotel.name}</h1>

      <HotelImagesManager hotelId={hotel.id} images={hotel.images} />
    </div>
  );
}

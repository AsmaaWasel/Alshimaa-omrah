import { getHotelById } from '@/app/actions/hotels'
import { HotelForm } from '@/components/admin/hotel-form'
import { HotelImageGallery } from '@/components/admin/hotel-image-gallery'

export default async function HotelDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const hotel = await getHotelById(parseInt(id))

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Form Section */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Edit Hotel</h1>
            <p className="text-muted-foreground mt-1">Update hotel information</p>
          </div>
          <HotelForm hotel={hotel} />
        </div>

        {/* Images Section */}
        <div className="lg:col-span-1">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-foreground">Images</h2>
            <p className="text-muted-foreground text-sm mt-1">
              Manage hotel photos
            </p>
          </div>
          <HotelImageGallery hotelId={hotel.id} initialImages={hotel.images} />
        </div>
      </div>
    </div>
  )
}

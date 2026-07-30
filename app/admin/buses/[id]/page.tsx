import { getBusById } from '@/app/actions/buses'
import { BusForm } from '@/components/admin/bus-form'
import { BusImageGallery } from '@/components/admin/bus-image-gallery'

export default async function BusDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const bus = await getBusById(parseInt(id))

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Form Section */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Edit Bus</h1>
            <p className="text-muted-foreground mt-1">Update bus information</p>
          </div>
          <BusForm bus={bus} />
        </div>

        {/* Images Section */}
        <div className="lg:col-span-1">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-foreground">Images</h2>
            <p className="text-muted-foreground text-sm mt-1">Manage bus photos</p>
          </div>
          <BusImageGallery busId={bus.id} initialImages={bus.images} />
        </div>
      </div>
    </div>
  )
}

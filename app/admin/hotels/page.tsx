import { getHotels } from '@/app/actions/hotels'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Plus, Edit, Trash2 } from 'lucide-react'
import { HotelDeleteButton } from '@/components/admin/hotel-delete-button'

export default async function HotelsPage() {
  const hotelsList = await getHotels()

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Hotels</h1>
          <p className="text-muted-foreground mt-1">Manage your hotel listings</p>
        </div>
        <Link href="/admin/hotels/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Hotel
          </Button>
        </Link>
      </div>

      {/* Hotels Grid */}
      {hotelsList.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 rounded-lg border border-dashed border-border">
          <p className="text-muted-foreground mb-4">No hotels yet</p>
          <Link href="/admin/hotels/new">
            <Button>Create Your First Hotel</Button>
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {hotelsList.map((hotel) => (
            <div
              key={hotel.id}
              className="rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-shadow"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {hotel.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {hotel.location}
                  </p>
                </div>

                {hotel.description && (
                  <p className="text-sm text-foreground line-clamp-2">
                    {hotel.description}
                  </p>
                )}

                <div className="flex gap-2 flex-wrap">
                  {hotel.rating && (
                    <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium">
                      ⭐ {hotel.rating}
                    </span>
                  )}
                  {hotel.pricePerNight && (
                    <span className="px-2 py-1 rounded bg-accent/10 text-accent-foreground text-xs font-medium">
                      ${hotel.pricePerNight}/night
                    </span>
                  )}
                </div>

                <div className="flex gap-2 pt-4">
                  <Link href={`/admin/hotels/${hotel.id}`} className="flex-1">
                    <Button variant="outline" className="w-full">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                  </Link>
                  <HotelDeleteButton hotelId={hotel.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

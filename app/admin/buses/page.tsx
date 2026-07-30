import { getBuses } from '@/app/actions/buses'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Plus, Edit, Trash2 } from 'lucide-react'
import { BusDeleteButton } from '@/components/admin/bus-delete-button'

export default async function BusesPage() {
  const busesList = await getBuses()

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Buses</h1>
          <p className="text-muted-foreground mt-1">Manage your bus listings</p>
        </div>
        <Link href="/admin/buses/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Bus
          </Button>
        </Link>
      </div>

      {/* Buses Grid */}
      {busesList.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 rounded-lg border border-dashed border-border">
          <p className="text-muted-foreground mb-4">No buses yet</p>
          <Link href="/admin/buses/new">
            <Button>Create Your First Bus</Button>
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {busesList.map((bus) => (
            <div
              key={bus.id}
              className="rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-shadow"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {bus.name}
                  </h3>
                </div>

                {bus.description && (
                  <p className="text-sm text-foreground line-clamp-2">
                    {bus.description}
                  </p>
                )}

                <div className="flex gap-2 flex-wrap">
                  {bus.capacity && (
                    <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium">
                      👥 {bus.capacity} seats
                    </span>
                  )}
                  {bus.pricePerSeat && (
                    <span className="px-2 py-1 rounded bg-accent/10 text-accent-foreground text-xs font-medium">
                      ${bus.pricePerSeat}/seat
                    </span>
                  )}
                </div>

                <div className="flex gap-2 pt-4">
                  <Link href={`/admin/buses/${bus.id}`} className="flex-1">
                    <Button variant="outline" className="w-full">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                  </Link>
                  <BusDeleteButton busId={bus.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

import { HotelForm } from '@/components/admin/hotel-form'

export default function NewHotelPage() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Add New Hotel</h1>
        <p className="text-muted-foreground mt-1">Create a new hotel listing</p>
      </div>
      <HotelForm />
    </div>
  )
}

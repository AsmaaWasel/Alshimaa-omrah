import { BusForm } from '@/components/admin/bus-form'

export default function NewBusPage() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Add New Bus</h1>
        <p className="text-muted-foreground mt-1">Create a new bus listing</p>
      </div>
      <BusForm />
    </div>
  )
}

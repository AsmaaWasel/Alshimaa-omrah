import { notFound } from "next/navigation";
import { getBusById } from "@/app/actions/buses";
import BusVideosManager from "@/components/dashboard/buses/bus-videos-manager";


type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BusVideosPage({ params }: Props) {
  const { id } = await params;

  const bus = await getBusById(Number(id));

  if (!bus) {
    notFound();
  }

  return (
    <div className="space-y-6" dir="rtl">
      <div>
        <h1 className="text-3xl font-bold">إدارة فيديوهات الباص</h1>

        <p className="mt-2 text-gray-500">{bus.title}</p>
      </div>

      <BusVideosManager busId={bus.id} videos={bus.videos} />
    </div>
  );
}

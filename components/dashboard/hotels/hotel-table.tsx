"use client";

import { Pencil } from "lucide-react";
import HotelActions from "./hotel-actions";
import { useRouter } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type Hotel = {
  id: number;
  name: string;
  description?: string | null;
  location?: string | null;
  stars: number;
  packageType: string;

  images: {
    id: number;
    imageUrl: string;
  }[];

  videos: {
    id: number;
    videoUrl: string;
  }[];
};

type Props = {
  hotels: Hotel[];
};

export default function HotelTable({ hotels }: Props) {
  const router = useRouter();

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-right">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="p-4">اسم الفندق</th>

            <th className="p-4">شرح الفندق</th>

            <th className="p-4">الموقع</th>

            <th className="p-4">عدد النجوم</th>

            <th className="p-4">نوع الباقة</th>

            <th className="p-4">الصور</th>
            <th className="p-4">الفيديوهات</th>

            <th className="p-4">الإجراءات</th>
          </tr>
        </thead>

        <tbody>
          {hotels.length === 0 ? (
            <tr>
              <td colSpan={7} className="p-8 text-center text-gray-500">
                لا يوجد فنادق
              </td>
            </tr>
          ) : (
            hotels.map((hotel) => (
              <tr key={hotel.id} className="border-b hover:bg-gray-50">
                {/* الاسم */}

                <td className="p-4 font-semibold">{hotel.name}</td>

                {/* الوصف */}

                <td className="p-4 max-w-xs">
                  <p className="line-clamp-2 text-gray-600">
                    {hotel.description || "لا يوجد شرح"}
                  </p>
                </td>

                {/* الموقع */}

                <td className="p-4">{hotel.location || "-"}</td>

                {/* النجوم */}

                <td className="p-4">
                  {"⭐".repeat(hotel.stars)}

                  <span className="mr-2">{hotel.stars} نجوم</span>
                </td>

                {/* نوع الباقة */}

                <td className="p-4">
                  {hotel.packageType === "vip" ? "VIP" : "اقتصادي"}
                </td>

                {/* الصور */}

                <td className="p-4">
                  <button
                    onClick={() =>
                      router.push(`/dashboard/hotels/${hotel.id}/images`)
                    }
                    className="flex gap-2"
                  >
                    {hotel.images?.slice(0, 3).map((image) => (
                      <img
                        key={image.id}
                        src={image.imageUrl}
                        alt="hotel"
                        className="
                            w-12 h-12
                            rounded-lg
                            object-cover
                            hover:opacity-80
                            transition
                            "
                      />
                    ))}

                    {hotel.images.length === 0 && (
                      <div
                        className="
                            w-12 h-12
                            rounded-lg
                            bg-gray-100
                            flex items-center
                            justify-center
                            text-xs
                            text-gray-500
                            "
                      >
                        لا يوجد
                      </div>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 mt-2">
                    {hotel.images.length} صور
                  </p>
                </td>

                {/* الفيديوهات */}

                <td className="p-4">
                  {hotel.videos?.length > 0 ? (
                    <button
                      onClick={() =>
                        router.push(`/dashboard/hotels/${hotel.id}/videos`)
                      }
                      className="
        text-blue-600
        hover:underline
        "
                    >
                      {hotel.videos.length} فيديو
                    </button>
                  ) : (
                    <span className="text-gray-400">لا يوجد</span>
                  )}
                </td>

                {/* Actions */}

                <td className="p-4">
                  <div className="flex gap-3">
                    <AlertDialog>
                      <AlertDialogTrigger
                        className="
    rounded-lg
    p-2
    text-blue-600
    hover:bg-blue-50
  "
                      >
                        <Pencil size={18} />
                      </AlertDialogTrigger>

                      <AlertDialogContent
                        className="bg-white text-right"
                        dir="rtl"
                      >
                        <AlertDialogHeader>
                          <AlertDialogTitle>تعديل الفندق</AlertDialogTitle>

                          <AlertDialogDescription>
                            هل تريد الانتقال إلى صفحة تعديل بيانات الفندق؟
                          </AlertDialogDescription>
                        </AlertDialogHeader>

                        <AlertDialogFooter>
                          <AlertDialogCancel>إلغاء</AlertDialogCancel>

                          <AlertDialogAction
                            onClick={() =>
                              router.push(`/dashboard/hotels/${hotel.id}/edit`)
                            }
                            className="
                              bg-blue-600
                              hover:bg-blue-700
                              "
                          >
                            تعديل
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>

                    <HotelActions id={hotel.id} />
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

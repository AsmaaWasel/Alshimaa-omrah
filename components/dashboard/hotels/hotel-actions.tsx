"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteHotel } from "@/app/actions/hotels";
import { toast } from "sonner";

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
import { Pencil } from "lucide-react";
import { Trash2 } from "lucide-react";

type Props = {
  id: number;
};

export default function HotelActions({ id }: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    setLoading(true);

    const toastId = toast.loading("جاري حذف الفندق...");

    try {
      await deleteHotel(id);

      toast.dismiss(toastId);

      toast.success("تم حذف الفندق وجميع بياناته بنجاح");

      router.refresh();
    } catch (error) {
      console.error(error);

      toast.dismiss(toastId);

      toast.error("حدث خطأ أثناء حذف الفندق");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger
        className="
    rounded-lg
    p-2
    text-red-600
    hover:bg-red-50
  "
      >
        <Trash2 className="h-5 w-5" />
      </AlertDialogTrigger>

      <AlertDialogContent dir="rtl">
        <AlertDialogHeader>
          <AlertDialogTitle>حذف الفندق</AlertDialogTitle>

          <AlertDialogDescription>
            هل أنت متأكد من حذف هذا الفندق؟ سيتم حذف الفندق وجميع الصور
            والفيديوهات والمميزات الخاصة به نهائيًا.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="flex-row-reverse">
          <AlertDialogCancel>إلغاء</AlertDialogCancel>

          <AlertDialogAction
            onClick={handleDelete}
            disabled={loading}
            className="
            bg-red-600
            hover:bg-red-700
            "
          >
            {loading ? "جاري الحذف..." : "حذف"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

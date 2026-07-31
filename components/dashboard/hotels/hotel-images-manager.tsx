"use client";

import { Trash2, Upload } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { addHotelImage, deleteHotelImage } from "@/app/actions/hotels";

type Props = {
  hotelId: number;

  images: {
    id: number;
    imageUrl: string;
    altText?: string | null;
  }[];
};

export default function HotelImagesManager({
  hotelId,
  images: initialImages,
}: Props) {
  const [images, setImages] = useState(initialImages);

  const [loading, setLoading] = useState(false);

  const uploadImages = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files || files.length === 0) return;

    setLoading(true);

    const toastId = toast.loading("جاري رفع الصور...");

    try {
      for (const file of Array.from(files)) {
        const formData = new FormData();

        formData.append("file", file);

        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();

        if (data.url) {
          const image = await addHotelImage({
            hotelId,

            imageUrl: data.url,

            altText: "Hotel image",
          });

          setImages((prev) => [...prev, image]);
        }
      }

      toast.dismiss(toastId);

      toast.success("تم إضافة الصور بنجاح");
    } catch (error) {
      console.error(error);

      toast.dismiss(toastId);

      toast.error("حدث خطأ أثناء رفع الصور");
    } finally {
      setLoading(false);
    }
  };

  const deleteImage = async (id: number) => {
    const toastId = toast.loading("جاري حذف الصورة...");

    try {
      await deleteHotelImage(id);

      setImages((prev) => prev.filter((image) => image.id !== id));

      toast.dismiss(toastId);

      toast.success("تم حذف الصورة");
    } catch (error) {
      console.error(error);

      toast.dismiss(toastId);

      toast.error("حدث خطأ أثناء الحذف");
    }
  };

  return (
    <div className="space-y-6">
      <label
        className="
flex
cursor-pointer
items-center
gap-3
rounded-lg
border
p-4
hover:bg-gray-50
"
      >
        <Upload size={20} />

        <span>{loading ? "جاري الرفع..." : "إضافة صور"}</span>

        <input
          type="file"
          hidden
          multiple
          accept="image/*"
          onChange={uploadImages}
        />
      </label>

      <div
        className="
grid
grid-cols-2
md:grid-cols-4
gap-5
"
      >
        {images.map((image) => (
          <div
            key={image.id}
            className="
relative
overflow-hidden
rounded-xl
border
"
          >
            <img
              src={image.imageUrl}
              alt={image.altText ?? "hotel"}
              className="
h-48
w-full
object-cover
"
            />

            <button
              type="button"
              onClick={() => deleteImage(image.id)}
              className="
absolute
top-2
right-2
rounded-full
bg-red-500
p-2
text-white
hover:bg-red-600
"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

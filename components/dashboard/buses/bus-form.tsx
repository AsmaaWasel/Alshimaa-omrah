"use client";

import { useState } from "react";
import { Upload, Video } from "lucide-react";
import { createBus, updateBus } from "@/app/actions/buses";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Bus = {
  id?: number;
  title: string;
  description?: string | null;
  busType: string;

  images?: {
    id?: number;
    imageUrl: string;
  }[];

  videos?: {
    id?: number;
    videoUrl: string;
  }[];
};

type BusFormProps = {
  bus?: Bus;
  onSubmit?: (data: FormData) => void | Promise<void>;
};

export default function BusForm({ bus, onSubmit }: BusFormProps) {
  const router = useRouter();

  const [images, setImages] = useState<File[]>([]);
  const [videos, setVideos] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  function handleImages(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;

    setImages(Array.from(e.target.files));
  }

  function handleVideos(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;

    setVideos(Array.from(e.target.files));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const loadingToast = toast.loading(
      bus ? "جاري تعديل الباص..." : "جاري إضافة الباص...",
    );

    try {
      const formData = new FormData(e.currentTarget);

      images.forEach((image) => {
        formData.append("images", image);
      });

      videos.forEach((video) => {
        formData.append("videos", video);
      });

      if (onSubmit) {
        await onSubmit(formData);
      } else if (bus?.id) {
        await updateBus(bus.id, formData);
      } else {
        await createBus(formData);
      }

      toast.dismiss(loadingToast);

      toast.success(
        bus ? "تم تعديل الباص بنجاح 🎉" : "تم إضافة الباص بنجاح 🎉",
      );

      router.push("/dashboard/buses");
      router.refresh();
    } catch (error) {
      console.error("Bus submit error:", error);

      toast.dismiss(loadingToast);

      toast.error("حدث خطأ أثناء حفظ الباص");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* اسم الباص */}
      <div>
        <label className="block mb-2 font-semibold">اسم الباص</label>

        <input
          name="title"
          defaultValue={bus?.title || ""}
          placeholder="مثال: باص VIP موديل 2026"
          className="
          w-full
          rounded-lg
          border
          p-3
          "
          required
        />
      </div>

      {/* نوع الباص */}
      <div>
        <label className="block mb-2 font-semibold">نوع الباص</label>

        <select
          name="busType"
          defaultValue={bus?.busType || ""}
          className="
          w-full
          rounded-lg
          border
          p-3
          "
          required
        >
          <option value="">اختر نوع الباص</option>

          <option value="vip">VIP</option>

          <option value="economic">اقتصادي</option>
        </select>
      </div>

      {/* الوصف */}
      <div>
        <label className="block mb-2 font-semibold">شرح الباص</label>

        <textarea
          name="description"
          defaultValue={bus?.description || ""}
          placeholder="اكتب تفاصيل الباص والخدمات..."
          rows={5}
          className="
          w-full
          rounded-lg
          border
          p-3
          "
        />
      </div>

      {/* الصور */}
      <div>
        <label className="block mb-2 font-semibold">صور الباص</label>

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

          <span>اختر صور</span>

          <input
            type="file"
            accept="image/*"
            multiple
            hidden
            onChange={handleImages}
          />
        </label>

        {images.length > 0 && (
          <div className="mt-3 space-y-1">
            {images.map((image) => (
              <p key={image.name} className="text-sm text-gray-600">
                {image.name}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* الفيديوهات */}
      <div>
        <label className="block mb-2 font-semibold">فيديوهات الباص</label>

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
          <Video size={20} />

          <span>اختر فيديوهات</span>

          <input
            type="file"
            accept="video/*"
            multiple
            hidden
            onChange={handleVideos}
          />
        </label>

        {videos.length > 0 && (
          <div className="mt-3 space-y-1">
            {videos.map((video) => (
              <p key={video.name} className="text-sm text-gray-600">
                {video.name}
              </p>
            ))}
          </div>
        )}
      </div>

      <button
        disabled={loading}
        type="submit"
        className="
        w-full
        rounded-lg
        bg-black
        py-3
        text-white
        disabled:opacity-50
        "
      >
        {loading ? "جاري الحفظ..." : bus ? "تعديل الباص" : "حفظ الباص"}
      </button>
    </form>
  );
}

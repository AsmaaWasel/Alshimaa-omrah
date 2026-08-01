"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Hotel = {
  id: number;
  name: string;
  description?: string | null;
  location?: string | null;
  stars: number;
  packageType: string;
};

type HotelFormProps = {
  initialData?: any;
  onSubmit?: (data: FormData) => Promise<void>;
};
export default function HotelForm({ onSubmit, initialData }: HotelFormProps) {
  const [images, setImages] = useState<File[]>([]);
  const [videos, setVideos] = useState<File[]>([]);

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    setImages(Array.from(e.target.files));
  };

  const handleVideos = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    setVideos(Array.from(e.target.files));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const loadingToast = toast.loading(
      initialData ? "جاري تعديل الفندق..." : "جاري إضافة الفندق...",
    );

    try {
      const formData = new FormData(e.currentTarget);

      images.forEach((image) => {
        formData.append("images", image);
      });

      videos.forEach((video) => {
        formData.append("videos", video);
      });

      await onSubmit?.(formData);

      toast.dismiss(loadingToast);

      toast.success(
        initialData ? "تم تعديل الفندق بنجاح 🎉" : "تم إضافة الفندق بنجاح 🎉",
      );

      router.push("/dashboard/hotels");

      router.refresh();
    } catch (error) {
      console.error(error);

      toast.dismiss(loadingToast);

      toast.error("حدث خطأ أثناء حفظ الفندق");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" dir="rtl">
      {/* اسم الفندق */}

      <div>
        <label className="block mb-2 font-semibold">اسم الفندق</label>

        <input
          name="name"
          type="text"
          defaultValue={initialData?.name ?? ""}
          placeholder="مثال: فندق ميلينيوم"
          className="
w-full
rounded-lg
border
p-3
"
          required
        />
      </div>

      {/* الوصف */}

      <div>
        <label className="block mb-2 font-semibold">شرح الفندق</label>

        <textarea
          name="description"
          defaultValue={initialData?.description ?? ""}
          placeholder="اكتب تفاصيل الفندق والخدمات..."
          rows={5}
          className="
w-full
rounded-lg
border
p-3
"
        />
      </div>

      {/* الموقع */}

      <div>
        <label className="block mb-2 font-semibold">الموقع</label>

        <input
          name="location"
          type="text"
          defaultValue={initialData?.location ?? ""}
          placeholder="مثال: مكة - العزيزية"
          className="
w-full
rounded-lg
border
p-3
"
        />
      </div>

      {/* النجوم */}

      <div>
        <label className="block mb-2 font-semibold">عدد النجوم</label>

        <select
          name="stars"
          defaultValue={initialData?.stars?.toString()}
          className="
w-full
rounded-lg
border
p-3
"
          required
        >
          <option value="">اختر عدد النجوم</option>

          <option value="3">3 نجوم</option>

          <option value="4">4 نجوم</option>

          <option value="5">5 نجوم</option>
        </select>
      </div>

      {/* نوع الباقة */}

      <div>
        <label className="block mb-2 font-semibold">نوع الباقة</label>

        <select
          name="packageType"
          defaultValue={initialData?.packageType}
          className="
w-full
rounded-lg
border
p-3
"
          required
        >
          <option value="">اختر الباقة</option>

          <option value="vip">VIP</option>

          <option value="economic">اقتصادي</option>
        </select>
      </div>

      {/* صور الفندق */}

      <div>
        <label className="block mb-2 font-semibold">صور الفندق</label>

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
          <div className="mt-4 space-y-2">
            {images.map((image) => (
              <div key={image.name} className="text-sm text-gray-600">
                🖼️ {image.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* فيديوهات الفندق */}

      <div>
        <label className="block mb-2 font-semibold">فيديوهات الفندق</label>

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
          <div className="mt-4 space-y-2">
            {videos.map((video) => (
              <div key={video.name} className="text-sm text-gray-600">
                🎥 {video.name}
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="
w-full
rounded-lg
bg-black
py-3
text-white
disabled:opacity-50
"
      >
        {loading ? "جاري الحفظ..." : "حفظ الفندق"}
      </button>
    </form>
  );
}

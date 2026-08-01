"use client";

import { useState } from "react";
import { Trash2, Upload } from "lucide-react";

import { addHotelVideo, deleteHotelVideo } from "@/app/actions/hotels";

type Props = {
  hotelId: number;

  videos: {
    id: number;
    videoUrl: string;
  }[];
};

export default function HotelVideosManager({
  hotelId,
  videos: initialVideos,
}: Props) {
  const [videos, setVideos] = useState(initialVideos);

  const [loading, setLoading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files || files.length === 0) return;

    setLoading(true);

    try {
      for (const file of Array.from(files)) {
        const formData = new FormData();

        formData.append("file", file);

        formData.append("type", "video");

        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();

        if (data.url) {
          const video = await addHotelVideo({
            hotelId,
            videoUrl: data.url,
          });

          setVideos((prev) => [...prev, video]);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    await deleteHotelVideo(id);

    setVideos((prev) => prev.filter((video) => video.id !== id));
  };

  return (
    <div className="space-y-6">
      <label
        className="
flex
items-center
gap-2
cursor-pointer
bg-black
text-white
px-5
py-3
rounded-lg
w-fit
"
      >
        <Upload size={18} />

        {loading ? "جاري الرفع..." : "إضافة فيديو"}

        <input
          type="file"
          accept="video/*"
          multiple
          hidden
          onChange={handleUpload}
        />
      </label>

      {videos.length === 0 ? (
        <div
          className="
border
rounded-lg
p-10
text-center
text-gray-500
"
        >
          لا يوجد فيديوهات للفندق
        </div>
      ) : (
        <div
          className="
grid
grid-cols-1
md:grid-cols-3
gap-5
"
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className="
relative
border
rounded-xl
overflow-hidden
"
            >
              <video
                src={video.videoUrl}
                controls
                className="
w-full
h-60
object-cover
"
              />

              <button
                onClick={() => handleDelete(video.id)}
                className="
absolute
top-2
right-2
bg-white
p-2
rounded-full
text-red-600
shadow
"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

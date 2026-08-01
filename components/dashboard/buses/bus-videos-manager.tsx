"use client";

import { useState } from "react";
import { Trash2, Upload } from "lucide-react";
import { addBusVideo, deleteBusVideo } from "@/app/actions/buses";

type Props = {
  busId: number;

  videos: {
    id: number;
    videoUrl: string;
  }[];
};

export default function BusVideosManager({
  busId,
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
          const video = await addBusVideo({
            busId,
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
    try {
      await deleteBusVideo(id);

      setVideos((prev) => prev.filter((video) => video.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-6">
      <label
        className="
        flex
        w-fit
        cursor-pointer
        items-center
        gap-2
        rounded-lg
        bg-black
        px-5
        py-3
        text-white
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
            rounded-lg
            border
            p-10
            text-center
            text-gray-500
            "
        >
          لا يوجد فيديوهات للباص
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
                  rounded-xl
                  overflow-hidden
                  border
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
                    rounded-full
                    bg-white
                    p-2
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

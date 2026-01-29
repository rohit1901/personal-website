"use client";
import { InstagramMedia } from "@website/types";
import Image from "next/image";
import { INSTAGRAM_DATA } from "@website/data";
const media = INSTAGRAM_DATA.data?.filter((instagramObj: InstagramMedia) =>
  instagramObj.caption?.includes("#random"),
);
export const Carousel = () => {
  return (
    <div className="carousel rounded-box p-4 space-x-4 bg-transparent justify-center">
      {media?.map((m, i) => (
        <div className="carousel-item mr-2" key={m.media_url}>
          <Image
            src={m.media_url ?? ""}
            alt={`instagram profile image-${i}`}
            className="object-cover rounded-lg"
            loading="lazy"
            width={300}
            height={400}
          />
        </div>
      ))}
    </div>
  );
};

"use client"
import {useEffect, useState} from "react";
import {InstagramMedia} from "@website/types";
import {ContentLoader} from "@website/components/ContentLoader";

export const Carousel = () => {
    const [loading, setLoading] = useState(false);
    const [media, setMedia] = useState<InstagramMedia[]>([])
    useEffect(() => {
        setLoading(true)
        fetch("/api/instagram/get")
            .then(response => response.json())
            .then(data => {
                setMedia(data)
            }).catch(console.error)
            .finally(() => setLoading(false))
    }, [])
    if (loading) {
        return <ContentLoader/>
    }
    return (
        <div className="carousel rounded-box p-4 space-x-4 bg-transparent justify-center">
            {media?.map((m, i) => (
                <div className="carousel-item mr-2" key={m.media_url}>
                    <img src={m.media_url} alt={`instagram profile image-${i}`} className="object-cover rounded-lg" loading="lazy"
                         width={300} height={400}/>
                </div>
            ))}
        </div>
    )
}
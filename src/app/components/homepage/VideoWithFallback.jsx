"use client";

import React, { useState } from "react";
import Image from "next/image";

function VideoWithFallback({ videoSrc, imageSrc, alt, className }) {
    const [error, setError] = useState(false);

    return (
        <div className={`relative w-full overflow-hidden ${className}`}>
            {!error ? (
                <video
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-lg"
                onError={() => setError(true)}
                />
            ) : (
                <Image
                src={imageSrc}
                alt={alt}
                fill
                className="object-cover rounded-lg"
                sizes="100vw"
                />
            )}
        </div>
    );
}

export default VideoWithFallback;

import { useRef, useEffect } from 'react';

/* Special component that will autoplay a silent video on mobile. */
export default function PlayBgVideo({ className, videoSrc, altText }) {
  const videoRef = useRef(undefined);

  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });

  return (
    <video
      className={className}
      ref={videoRef}
      alt={altText}
      loop
      autoPlay
      muted
      playsInline
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}

"use client"

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const video = document.getElementById('bgVideo');

    video.setAttribute('controls', false);

    video.addEventListener('click', function() {
      if (video.hasAttribute('controls')) {
        video.removeAttribute('controls');
      } else {
        video.setAttribute('controls', false);
      }
    });

    return () => {
      video.removeEventListener('click');
    };
  }, []);
  
  return (
    <div className="videoContainer">
      <video id="bgVideo" autoPlay loop muted playsInline>
        <source src="/background.MP4" type="video/mp4" />  
      </video>
    </div>
  );
}

import React from "react";

export default function Home() {
  return (
    <div className="videoContainer">
      <video autoplay loop muted playsinline>
        <source src="/background.MP4" type="video/mp4" />  
      </video>
    </div>
  );
}

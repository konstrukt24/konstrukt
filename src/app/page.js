import React from "react";

export default function Home() {
  return (
    <div className="videoContainer">
      <video autoPlay loop muted playsinline>
        <source src="/background.MP4" type="video/mp4" />  
      </video>
    </div>
  );
}

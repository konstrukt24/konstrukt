import React from "react";

export default function Home() {
  return (
    <div className="videoContainer">
      <video autoPlay loop muted src="/background.mp4" type="video/mp4" />
    </div>
  );
}

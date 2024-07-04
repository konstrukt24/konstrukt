import React from "react";

export default function Home() {
  return (
    <div className="videoContainer">
      <video autoPlay loop muted>
        <source src="/background.mp4" type="video/mp4" />  
      </video>
    </div>
  );
}

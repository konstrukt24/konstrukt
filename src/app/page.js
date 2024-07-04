export default function Home() {
  return (
    <div className="page-content">
      <video autoPlay loop muted>
        <source src="/video/background.mp4" type="video/mp4" />
      </video>

      <audio controls>
        <source src="/audio/background.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

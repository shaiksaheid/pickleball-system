import { useParams } from "react-router-dom";

import { events } from "../services/events";

const ReplayPage = () => {
  const { id } = useParams();

  const event = events.find(
    (e) => e.id === Number(id)
  );

  if (!event) {
    return (
      <div>
        Replay not found
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#020617,#0f172a,#111827)",
        color: "white",
        padding: "30px",
      }}
    >
      <h1
        style={{
          marginBottom: "20px",
          fontSize: "38px",
        }}
      >
        {event.emoji} {event.title}
      </h1>

      <p
        style={{
          opacity: 0.7,
          marginBottom: "24px",
        }}
      >
        {event.description}
      </p>

      <video
        src={event.replayClip}
        controls
        autoPlay
        style={{
          width: "100%",
          maxHeight: "80vh",
          borderRadius: "18px",
          background: "black",
        }}
      />
    </div>
  );
};

export default ReplayPage;
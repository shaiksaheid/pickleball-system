import { events } from "../services/events";

type Props = {
  duration: number;
  currentTime: number;
  onSeek: (time: number) => void;
};

const Timeline = ({
  duration,
  currentTime,
  onSeek,
}: Props) => {
  const progress =
    (currentTime / duration) * 100;

  return (
    <div style={{ marginTop: "18px" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "10px",
          background: "rgba(255,255,255,0.15)",
          borderRadius: "20px",
          overflow: "visible",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background:
              "linear-gradient(90deg,#ff7b00,#ffcc00)",
            borderRadius: "20px",
          }}
        />

        {events.map((event) => (
          <div
            key={event.id}
            onClick={() => onSeek(event.time)}
            title={event.title}
            style={{
              position: "absolute",
              left: `${
                (event.time / duration) * 100
              }%`,
              top: "-18px",
              transform: "translateX(-50%)",
              cursor: "pointer",
              fontSize: "20px",
              }}
          >
            {event.emoji}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
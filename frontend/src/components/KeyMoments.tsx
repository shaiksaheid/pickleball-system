import { events } from "../services/events";

type Props = {
  onSeek: (time: number) => void;
};

const KeyMoments = ({
  onSeek,
}: Props) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Key Moments</h2>

      {events.map((event) => (
        <div
          key={event.id}
          onClick={() => onSeek(event.time)}
          style={{
            padding: "12px",
            background: "#222",
            color: "white",
            marginBottom: "10px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          {event.title}
        </div>
      ))}
    </div>
  );
};

export default KeyMoments;
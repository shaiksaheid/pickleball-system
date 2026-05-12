import { events } from "../services/events";

type Props = {
  onSeek: (time: number) => void;
};

const EventLogs = ({ onSeek }: Props) => {
  return (
    <div
      style={{
        marginTop: "24px",
        background: "rgba(255,255,255,0.08)",
        padding: "18px",
        borderRadius: "14px",
      }}
    >
      <h3 style={{ marginBottom: "14px" }}>
        Match Events
      </h3>

      {events.map((event) => (
        <div
          key={event.id}
          onClick={() => onSeek(event.time)}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "12px",
            marginBottom: "10px",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <div>
            {event.emoji} {event.title}
          </div>

          <div>
            00:{event.time}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventLogs;
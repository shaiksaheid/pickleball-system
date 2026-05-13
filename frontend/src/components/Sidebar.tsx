import { events } from "../services/events";

const Sidebar = () => {
  return (
    <div>
      <h2
        style={{
          marginBottom: "20px",
          color: "white",
          fontSize: "28px",
        }}
      >
        Key Moments
      </h2>

      {events.map((event) => (
  <div
    key={event.id}
    onClick={() =>
      window.location.href =
        `https://pickleball-system-shah.vercel.app/replay/${event.id}`
    }
          style={{
            background:
              "rgba(255,255,255,0.06)",

            borderRadius: "18px",

            overflow: "hidden",

            marginBottom: "18px",

            cursor: "pointer",

            transition: "0.3s",

            backdropFilter:
              "blur(12px)",

            boxShadow:
              "0 6px 20px rgba(0,0,0,0.25)",
          }}
        >
          {/* VIDEO PREVIEW */}
          <video
            src={event.replayClip}
            muted
            loop
            autoPlay
            style={{
              width: "100%",
              height: "170px",
              objectFit: "cover",
              background: "black",
            }}
          />

          {/* CARD CONTENT */}
          <div
            style={{
              padding: "14px",
            }}
          >
            <div
              style={{
                fontSize: "22px",
                marginBottom: "8px",
              }}
            >
              {event.emoji}{" "}
              {event.title}
            </div>

            <div
              style={{
                opacity: 0.7,
                marginBottom: "12px",
                fontSize: "14px",
              }}
            >
              {event.description}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  opacity: 0.7,
                }}
              >
                ⏱ {event.duration}s
              </div>

              <button
                style={{
                  border: "none",
                  padding:
                    "8px 14px",

                  borderRadius:
                    "10px",

                  background:
                    "linear-gradient(90deg,#ff7b00,#ffb700)",

                  color: "black",

                  fontWeight:
                    "bold",

                  cursor: "pointer",
                }}
              >
                ▶ play
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
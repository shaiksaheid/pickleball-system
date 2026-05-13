const Highlights = () => {
  return (
    <div
      style={{
        marginTop: "24px",

        background:
          "rgba(255,255,255,0.06)",

        borderRadius: "20px",

        overflow: "hidden",

        position: "relative",

        cursor: "pointer",
      }}

      onClick={() =>
        window.location.href =
           "https://pickleball-system-shah.vercel.app/highlights"
      }
    >
      {/* PREVIEW IMAGE */}
      <div
        style={{
          height: "320px",

          background:
            "linear-gradient(135deg,#ff7b00,#ffb700)",

          display: "flex",

          justifyContent: "center",

          alignItems: "center",

          position: "relative",
        }}
      >
        {/* PLAY BUTTON */}
        <div
          style={{
            width: "90px",

            height: "90px",

            borderRadius: "50%",

            background:
              "rgba(0,0,0,0.6)",

            display: "flex",

            justifyContent: "center",

            alignItems: "center",

            fontSize: "42px",

            color: "white",

            backdropFilter:
              "blur(10px)",
          }}
        >
          ▶
        </div>
      </div>

      {/* CONTENT */}
      <div
        style={{
          padding: "20px",
        }}
      >
        <h2
          style={{
            color: "white",

            marginBottom: "10px",
          }}
        >
          🏆 Match Highlights
        </h2>

        <div
          style={{
            opacity: 0.7,
          }}
        >
          Watch the best moments and
          key replays from the match.
        </div>
      </div>
    </div>
  );
};

export default Highlights;
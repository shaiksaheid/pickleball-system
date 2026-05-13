const HighlightsPage = () => {
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
          fontSize: "40px",

          marginBottom: "20px",
        }}
      >
        🏆 Match Highlights
      </h1>

      <p
        style={{
          opacity: 0.7,

          marginBottom: "24px",
        }}
      >
        Best replay moments from the match.
      </p>

      <video
        src="https://pickleball-system-qw5u.onrender.com/clips/highlights.mp4"
        controls
        autoPlay
        style={{
          width: "100%",

          maxHeight: "82vh",

          borderRadius: "20px",

          background: "black",
        }}
      />
    </div>
  );
};

export default HighlightsPage;
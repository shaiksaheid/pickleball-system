import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

import Timeline from "./Timeline";
import Sidebar from "./Sidebar";
import EventLogs from "./EventLogs";

import { events } from "../services/events";

import Highlights from "./Highlights";
const VideoPlayer = () => {
  const videoRef =
    useRef<HTMLVideoElement>(null);

  const [duration, setDuration] =
    useState(100);

  const [currentTime, setCurrentTime] =
    useState(0);

  const [isPlaying, setIsPlaying] =
    useState(true);

  const [showControls, setShowControls] =
    useState(true);

  // HLS PLAYER
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const videoSrc =
      "https://pickleball-system-qw5u.onrender.com/stream/playlist.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
      });

      hls.loadSource(videoSrc);

      hls.attachMedia(video);

      hls.on(
        Hls.Events.MANIFEST_PARSED,
        () => {
          video.play();
        }
      );

      hls.on(Hls.Events.ERROR, (_, data) => {
        console.log("HLS Error:", data);
      });
    }

    video.addEventListener(
      "loadedmetadata",
      () => {
        setDuration(video.duration);
      }
    );

    video.addEventListener("timeupdate", () => {
      setCurrentTime(video.currentTime);
    });
  }, []);

  // AUTO HIDE CONTROLS
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const resetControlsTimer = () => {
      setShowControls(true);

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    };

    window.addEventListener(
      "mousemove",
      resetControlsTimer
    );

    window.addEventListener(
      "click",
      resetControlsTimer
    );

    resetControlsTimer();

    return () => {
      clearTimeout(timeout);

      window.removeEventListener(
        "mousemove",
        resetControlsTimer
      );

      window.removeEventListener(
        "click",
        resetControlsTimer
      );
    };
  }, []);

  // CURRENT EVENT INDEX
const [
  currentEventIndex,
  setCurrentEventIndex,
] = useState(0);

// SEEK TO EVENT
const seekToEvent = (
  time: number
) => {
  if (!videoRef.current)
    return;

  const video =
    videoRef.current;

  // Ensure metadata loaded
  if (
    video.readyState >= 1
  ) {
    video.currentTime = time;

    video.play();
  } else {
    video.addEventListener(
      "loadedmetadata",
      () => {
        video.currentTime =
          time;

        video.play();
      },
      { once: true }
    );
  }

  // UPDATE EVENT INDEX
  const index =
    events.findIndex(
      (e) => e.time === time
    );

  if (index !== -1) {
    setCurrentEventIndex(
      index
    );
  }
};

// NEXT EVENT
const nextEvent = () => {
  const nextIndex =
    currentEventIndex + 1;

  if (
    nextIndex < events.length
  ) {
    const next =
      events[nextIndex];

    seekToEvent(next.time);

    setCurrentEventIndex(
      nextIndex
    );
  }
};

// PREVIOUS EVENT
const prevEvent = () => {
  const prevIndex =
    currentEventIndex - 1;

  if (prevIndex >= 0) {
    const prev =
      events[prevIndex];

    seekToEvent(prev.time);

    setCurrentEventIndex(
      prevIndex
    );
  }
};

  // PLAY / PAUSE
  const togglePlay = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play();

      setIsPlaying(true);
    } else {
      video.pause();

      setIsPlaying(false);
    }
  };

  // FORWARD 10 SEC
  const forward10 = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };

  // BACKWARD 10 SEC
  const backward10 = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
  };

  return (
  <div
    style={{
      width: "100vw",
      minHeight: "100vh",
      background:
        "linear-gradient(135deg,#020617,#0f172a,#111827)",
      color: "white",
      overflowX: "hidden",
    }}
  >
    {/* MAIN LAYOUT */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "76% 24%",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* LEFT SIDE */}
      <div
        style={{
          padding: "18px",
        }}
      >
        {/* TOP BAR */}
        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            marginBottom: "14px",
          }}
        >
          {/* TITLE */}
          <div>
            <h1
              style={{
                fontSize: "34px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              🏓 Pickleball Center
            </h1>

            <div
              style={{
                opacity: 0.7,
                marginTop: "4px",
              }}
            >
              Live Match Score &
              Highlights
            </div>
          </div>

          {/* PICKLEBALL SCOREBOARD */}
          <div
            style={{
              background:
                "rgba(255,255,255,0.08)",

              padding: "18px 30px",

              borderRadius: "18px",

              backdropFilter:
                "blur(12px)",

              boxShadow:
                "0 6px 20px rgba(0,0,0,0.3)",

              minWidth: "320px",

              textAlign: "center",
            }}
          >
            {/* TITLE */}
            <div
              style={{
                fontSize: "14px",

                opacity: 0.7,

                marginBottom: "12px",

                letterSpacing: "1px",
              }}
            >
              PICKLEBALL SCORE
            </div>

            {/* SCORE VALUES */}
            <div
              style={{
                display: "flex",

                justifyContent:
                  "center",

                gap: "18px",

                alignItems: "center",

                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  fontSize: "34px",

                  fontWeight:
                    "bold",

                  color: "#ffb700",
                }}
              >
                11
              </div>

              <div
                style={{
                  opacity: 0.4,
                }}
              >
                |
              </div>

              <div
                style={{
                  fontSize: "34px",

                  fontWeight:
                    "bold",

                  color: "#ffb700",
                }}
              >
                10
              </div>

              <div
                style={{
                  opacity: 0.4,
                }}
              >
                |
              </div>

              <div
                style={{
                  fontSize: "34px",

                  fontWeight:
                    "bold",

                  color: "#ffb700",
                }}
              >
                2
              </div>
            </div>

            {/* LABELS */}
            <div
              style={{
                display: "flex",

                justifyContent:
                  "center",

                gap: "24px",

                fontSize: "12px",

                opacity: 0.7,
              }}
            >
              <span>SERVER</span>

              <span>OPPONENT</span>

              <span>SERVER NO</span>
            </div>
          </div>
        </div>

          {/* VIDEO CONTAINER */}
          <div
            style={{
              position: "relative",
              width: "100%",
              borderRadius: "24px",
              overflow: "hidden",
              background: "black",
              boxShadow:
                "0 10px 50px rgba(0,0,0,0.6)",
            }}
          >
            {/* VIDEO */}
            <video
              ref={videoRef}
              autoPlay
              muted
              style={{
                width: "100%",
                height: "76vh",
                objectFit: "cover",
                background: "black",
              }}
            />

              {/* OTT CONTROLS */}
              <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "45px",
                zIndex: 10,
                opacity: showControls
                  ? 1
                  : 0,
                transition:
                  "opacity 0.4s ease",
                pointerEvents:
                  showControls
                    ? "auto"
                    : "none",
              }}
            >
              {/* BACKWARD */}
              <button
                onClick={backward10}
                style={overlayButton}
              >
                ↺
                <div
                  style={{
                    fontSize: "18px",
                    marginTop: "-5px",
                  }}
                >
                  10
                </div>
              </button>

              {/* PLAY / PAUSE */}
              <button
                onClick={togglePlay}
                style={{
                  ...overlayButton,
                  width: "90px",
                  height: "90px",
                  fontSize: "34px",
                }}
              >
                {isPlaying
                  ? "⏸"
                  : "▶"}
              </button>

              {/* FORWARD */}
              <button
                onClick={forward10}
                style={overlayButton}
              >
                ↻
                <div
                  style={{
                    fontSize: "18px",
                    marginTop: "-5px",
                  }}
                >
                  10
                </div>
              </button>
            </div>
          </div>

          {/* TIMELINE */}
          <div
            style={{
              marginTop: "18px",
              padding: "18px",
              borderRadius: "20px",
              background:
                "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
            }}
          >
            <Timeline
              duration={duration}
              currentTime={currentTime}
              onSeek={seekToEvent}
            />

            {/* EVENT NAVIGATION */}
            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <button
                onClick={prevEvent}
                style={navButton}
              >
                ⏮ Previous Event
              </button>

              <div
                style={{
                  opacity: 0.7,
                  fontSize: "15px",
                }}
              >
                ⏱{" "}
                {Math.floor(currentTime)}
                s
              </div>

              <button
                onClick={nextEvent}
                style={navButton}
              >
                ⏭ Next Event
              </button>
            </div>
          </div>

          {/* EVENT LOGS */}
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <EventLogs
              onSeek={seekToEvent}
            />
            <Highlights />
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div
          style={{
            padding:
              "20px 18px 20px 0px",
          }}
        >
          <Sidebar/>
        </div>
      </div>
    </div>
  );
};

// OVERLAY BUTTON STYLE
const overlayButton = {
  width: "78px",
  height: "78px",
  borderRadius: "50%",
  border: "none",
  background:
    "rgba(0,0,0,0.45)",
  color: "white",
  cursor: "pointer",
  fontSize: "34px",
  backdropFilter: "blur(10px)",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
  transition: "0.3s",
};

// NAVIGATION BUTTONS
const navButton = {
  border: "none",
  padding: "12px 18px",
  borderRadius: "12px",
  background:
    "linear-gradient(90deg,#ff7b00,#ffb700)",
  color: "black",
  fontWeight: "bold",
  cursor: "pointer",
};

export default VideoPlayer;
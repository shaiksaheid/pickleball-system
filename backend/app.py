from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pathlib import Path
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# HLS FOLDER
BASE_DIR = Path(__file__).resolve().parent.parent

HLS_DIR = BASE_DIR / "hls"

# HOME
@app.get("/")
def home():
    return {
        "message": "Streaming Server Running"
    }

# SERVE PLAYLIST
@app.get("/stream/playlist.m3u8")
def get_playlist():
    return FileResponse(
        HLS_DIR / "playlist.m3u8",
        media_type="application/vnd.apple.mpegurl"
    )

# SERVE TS SEGMENTS
@app.get("/stream/{segment_name}")
def get_segment(segment_name: str):
    return FileResponse(
        HLS_DIR / segment_name,
        media_type="video/mp2t"
    )


app.mount(
    "/stream",
    StaticFiles(directory="../hls"),
    name="stream"
)

app.mount(
    "/clips",
    StaticFiles(directory="../clips"),
    name="clips"
)
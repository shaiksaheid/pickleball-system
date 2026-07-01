# 🏓 Pickleball Replay Center

An AI-powered HLS-based Pickleball Replay Center that simulates live match streaming with a growing M3U8 playlist. The application provides an OTT-style viewing experience with live playback, replay navigation, match highlights, and event-based timeline controls.

---

## 🚀 Features

- 📺 Live HLS video streaming using a growing M3U8 playlist
- 🔴 Live playback simulation with LIVE indicator
- ⏱ Interactive event timeline with quick navigation
- 🎯 Replay specific match events
- 📋 Event logs with timestamps
- 🖼 Highlight cards with replay support
- 🏓 Pickleball score display
- ⏪ 10-second rewind and forward controls
- ▶ Play / Pause controls
- 📈 Dynamic timeline updates
- 🎨 Modern OTT-style user interface

---

## 🛠 Tech Stack

### Frontend
- React.js
- TypeScript
- Vite
- HLS.js
- CSS

### Backend
- FastAPI
- Python

### Streaming
- HTTP Live Streaming (HLS)
- M3U8 Playlist
- MPEG-TS Segments

---

## 📂 Project Structure

```
pickleball-system/
│
├── backend/
│   ├── main.py
│   ├── grow_stream.py
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── services/
│   └── ...
│
├── hls/
│   ├── live_playlist.m3u8
│   ├── playlist.m3u8
│   ├── seg_00000.ts
│   ├── seg_00001.ts
│   └── ...
│
└── README.md
```

---

## ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/shaiksaheid/pickleball-system.git

cd pickleball-system
```

---

## Backend Setup

```bash
cd backend

pip install -r requirements.txt

uvicorn main:app --reload
```

Backend runs on

```
http://localhost:8000
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## Live Stream Simulation

Start the backend server and then run:

```bash
python grow_stream.py
```

This script continuously appends video segments to the `live_playlist.m3u8` file, simulating a live HLS broadcast.

---

## Project Highlights

- Simulated live HLS streaming
- Growing M3U8 playlist generation
- Event-based replay navigation
- Interactive timeline controls
- Match highlights
- Live playback UI
- Responsive OTT-inspired interface

---

## Future Enhancements

- AI-powered automatic event detection
- Real-time score recognition using Computer Vision
- Live match analytics dashboard
- Multi-camera replay support
- Player statistics
- Cloud deployment with scalable streaming
- Live scoreboard integration

---

## Author

**Shaik Shaheid**

- GitHub: https://github.com/shaiksaheid
- LinkedIn: https://www.linkedin.com/in/shaik-shaheid

---

## License

This project is developed for educational purposes.

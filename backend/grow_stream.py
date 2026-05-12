import time
from pathlib import Path

# ROOT DIRECTORY
BASE_DIR = Path(__file__).resolve().parent.parent

# HLS FOLDER
HLS_DIR = BASE_DIR / "hls"

# LIVE PLAYLIST
playlist_path = HLS_DIR / "live_playlist.m3u8"

# INITIAL HEADER
header = """#EXTM3U
#EXT-X-VERSION:3
#EXT-X-TARGETDURATION:4
#EXT-X-MEDIA-SEQUENCE:0
#EXT-X-ALLOW-CACHE:YES
#EXT-X-MEDIA-SEQUENCE:0

"""

# RESET PLAYLIST
with open(playlist_path, "w") as f:
    f.write(header)

print("Starting Live Stream...\n")

# APPEND SEGMENTS ONE BY ONE
for i in range(28):

    segment = (
        f"#EXTINF:3.0,\n"
        f"seg_{i:05d}.ts\n"
    )

    with open(playlist_path, "a") as f:
        f.write(segment)

    print(f"Added segment {i}")

    # WAIT 3 SECONDS
    time.sleep(3)

# FINALIZE STREAM
with open(playlist_path, "a") as f:
    f.write("#EXT-X-ENDLIST")

print("\nStream Completed")
import subprocess

events = [
    {
        "title": "serve",
        "start": 6,
        "duration": 6,
    },

    {
        "title": "rally",
        "start": 18,
        "duration": 10,
    },

    {
        "title": "smash",
        "start": 36,
        "duration": 8,
    },

    {
        "title": "winner",
        "start": 60,
        "duration": 12,
    },

    {
        "title": "fastserve",
        "start": 75,
        "duration": 7,
    },
]

input_video = "../hls/full_match.mp4"

for event in events:

    output_file = (
        f"../clips/{event['title']}.mp4"
    )

    command = [
        "ffmpeg",

        "-y",

        "-ss",
        str(event["start"]),

        "-t",
        str(event["duration"]),

        "-i",
        input_video,

        "-c:v",
        "libx264",

        "-c:a",
        "aac",

        output_file,
    ]

    subprocess.run(command)

    print(
        f"Generated {output_file}"
    )
let currentTrackIndex = 0;
const audio = document.getElementById('audio');

// Array of track sources
const tracks = [
    'music/Let Her Go x Husn (Gravero Mashup)  Anuv Jain.mp3',
    'music/Hasi (Audio).mp3',
    'music/Safar Mashup  Harshal Music  Safar X Stay X Kina Chir  The Prophec  Juss  Punjabi Mashup 2023.mp3',
    'music/laree Choote lyrics Original.mp3'
];

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
function playPause() {
    const audio = document.getElementById("audio");
    const playPauseIcon = document.getElementById("playPauseIcon");

    if (audio.paused) {
        audio.play();
        playPauseIcon.classList.replace("fa-play", "fa-pause");
    } else {
        audio.pause();
        playPauseIcon.classList.replace("fa-pause", "fa-play");
    }
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
}

function previousTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
}

function loadTrack(index) {
    audio.src = tracks[index];
    audio.load();
}

function selectTrack(index) {
    currentTrackIndex = index;
    loadTrack(currentTrackIndex);
    audio.play();
}

function changeVolume(volume) {
    audio.volume = volume;
}

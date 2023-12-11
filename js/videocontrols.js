
let currentVideoIndex = 0;
const videos = document.querySelectorAll('.full-screen-video');

function showVideo(index) {
    videos.forEach((video, i) => {
        if (i === index) {
            video.style.display = 'block';
            video.play(); // Start playing the current video
        } else {
            video.style.display = 'none';
            video.pause(); // Pause other videos
        }
    });
}

function nextVideo() {
    videos[currentVideoIndex].pause(); // Pause the current video
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    showVideo(currentVideoIndex);
}

function prevVideo() {
    videos[currentVideoIndex].pause(); // Pause the current video
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    showVideo(currentVideoIndex);
}

// Show the first video initially
showVideo(currentVideoIndex);

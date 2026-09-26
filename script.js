const video = document.getElementById('tracking-video');

video.addEventListener('loadeddata', () => {
    video.pause();
});

document.addEventListener('mousemove', (e) => {
    if (video.readyState >= 2 && video.duration) {
        let normalizedX = e.clientX / window.innerWidth;
        let percentage = normalizedX;
        video.currentTime = percentage * video.duration;
    }
});
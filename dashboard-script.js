document.addEventListener('DOMContentLoaded', function() {
    const startDetectionButton = document.getElementById('start-detection');
    const detectionArea = document.getElementById('detection-area');
    const videoFeed = document.getElementById('video-feed');
    const drowsinessStatus = document.getElementById('drowsiness-status');

    let stream = null;

    startDetectionButton.addEventListener('click', async function() {
        try {
            stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoFeed.srcObject = stream;
            detectionArea.classList.remove('hidden');
            startDetectionButton.disabled = true;
            drowsinessStatus.textContent = 'Detection in progress...';
            startDrowsinessDetection();
        } catch (err) {
            console.error('Error accessing camera:', err);
            alert('Unable to access the camera. Please make sure you have given permission and try again.');
        }
    });

    

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }
});


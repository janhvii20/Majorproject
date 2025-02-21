import React from 'react';
import './dashboard-styles.css';

const Dashboard = () => {
    const handleStartDetection = () => {
        // Here we would typically start the camera and begin drowsiness detection
        // For this example, we'll just show an alert
        alert('Camera activated. Drowsiness detection starting...');
        
        // In a real implementation, you would:
        // 1. Request camera access
        // 2. Start a video stream
        // 3. Begin processing frames for drowsiness detection
        // 4. Update the UI with detection results
    };

    return (
        <main className="dashboard">
            <div className="container">
                <h1>Drowsiness Detection Dashboard</h1>
                <div className="drowsiness-info">
                    <h2>How Drowsiness Detection Works</h2>
                    <p>Our advanced system uses multiple metrics to detect drowsiness:</p>
                    <ul>
                        <li><strong>EOR (Eye Opening Ratio):</strong> Measures the openness of the eyes.</li>
                        <li><strong>MOR (Mouth Opening Ratio):</strong> Detects yawning and mouth movements.</li>
                        <li><strong>NLR (Nose-Lip Ratio):</strong> Tracks facial muscle relaxation.</li>
                    </ul>
                    <p>These metrics are continuously monitored to assess the driver's alertness level.</p>
                </div>
                <div className="detection-animation">
                    <h2>Drowsiness Detection in Action</h2>
                    <div className="video-placeholder">
                        {/* Animated video or simulation would go here */}
                        <p>Animated demonstration of drowsiness detection in a moving vehicle</p>
                    </div>
                </div>
                <div className="start-detection">
                    <h2>Start Drowsiness Detection</h2>
                    <p>Click the button below to activate your device's camera and begin real-time drowsiness detection.</p>
                    <button id="start-detection" className="btn btn-primary" onClick={handleStartDetection}>Start Detection</button>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;


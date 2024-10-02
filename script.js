const hireMeButton = document.getElementById('hire-me');
const resumeButton = document.getElementById('resume');

// Function to create a blinking effect with complete disappearance
function blinkButton(button, color1, color2, interval) {
    setInterval(() => {
        // Toggle between fully visible and fully transparent
        if (button.style.opacity === '1') {
            button.style.opacity = '0'; // Completely disappear
        } else {
            button.style.opacity = '1'; // Fully visible
            button.style.backgroundColor = button.style.backgroundColor === color1 ? color2 : color1; // Change color when reappearing
        }
    }, interval);
}

// Call the function for each button with desired colors and intervals
blinkButton(hireMeButton, 'rgba(255, 0, 0, 0.8)', 'rgba(200, 0, 0, 0.8)', 1000); // Red color
blinkButton(resumeButton, 'rgba(255, 0, 0, 0.8)', 'rgba(200, 0, 0, 0.8)', 1500); // Red color

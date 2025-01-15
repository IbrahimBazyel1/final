document.getElementById('animateButton').addEventListener('click', function() {
    const box = document.getElementById('animatedBox');
    let position = 0;
    const move = setInterval(() => {
        position += 5; // Increment position
        box.style.top = position + 'px'; // Move box downwards
        if (position >= 100) { // Stop animation after 100px
            clearInterval(move);
        }
    }, 50); // Move every 50ms
});

document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const message = document.getElementById('message').value;

    // Send the message to the server via POST request
    fetch('/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'message': message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Update the LED matrix with the message
            document.getElementById('display-message').textContent = data.message;
        }
    })
    .catch(err => console.error('Error:', err));
});

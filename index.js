document.getElementById('send-btn').addEventListener('click', function() {
    let userInput = document.getElementById('user-input').value;

    // Always append user input to chat (even if empty or whitespace)
    appendMessage('You', userInput.trim() === '' ? '[No Input]' : userInput);

    let botResponse = getBotResponse(userInput);
    appendMessage('Bob', botResponse);

    // Clear the input field after sending the message
    document.getElementById('user-input').value = '';
});

function appendMessage(sender, message) {
    let chatBox = document.getElementById('chat-box');
    let messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    // Remove leading and trailing whitespace from input
    input = input.trim();

    if (input === '') {
        return 'Fine. Be that way!';
    } else if (input.endsWith('?')) {
        if (input === input.toUpperCase()) {
            return 'Calm down, I know what I\'m doing!';
        } else {
            return 'Sure.';
        }
    } else if (input === input.toUpperCase()) {
        return 'Whoa, chill out!';
    } else {
        return 'Whatever.';
    }
}

// main.js
const terminal = document.getElementById('terminal');
let input = '';

function init() {
    terminal.innerHTML = 'Welcome to DOS-like Portfolio<br>Type "help" for commands<br><br>> <span id="cursor">█</span>';
    document.addEventListener('keydown', handleKeyPress);
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        executeCommand(input);
        input = '';
    } else if (event.key === 'Backspace') {
        input = input.slice(0, -1);
    } else if (event.key.length === 1) {
        input += event.key;
    }
    updateDisplay();
}

function updateDisplay() {
    terminal.innerHTML = `Welcome to DOS-like Portfolio<br>Type "help" for commands<br><br>> ${input}<span id="cursor">█</span>`;
}

function executeCommand(cmd) {
    // Implement command execution logic here
    console.log(`Executing command: ${cmd}`);
}

init();
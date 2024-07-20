// main.js
import commands from './commands.js';

const terminal = document.getElementById('terminal');
let input = '';
let currentDisplay = '';

function init() {
    currentDisplay = 'Welcome to DOS-like Portfolio<br>Type "help" for commands<br><br>> ';
    terminal.innerHTML += currentDisplay + '<span id="input"></span><span id="cursor">█</span>';
    document.addEventListener('keydown', handleKeyPress);
    blinkCursor();
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
    console.log('Input:', input);
    updateDisplay();
}

function updateDisplay() {
    const inputSpan = document.getElementById('input');
    if (inputSpan) {
        inputSpan.innerHTML = input;
    }
}

function executeCommand(cmd) {
    // Implement command execution logic here
    console.log(`Executing command: ${cmd}`);
    const trimmedCmd = cmd.trim().toLowerCase();
    let result = `Unknown command: ${trimmedCmd}`;
    if (trimmedCmd in commands) {
        result = commands[trimmedCmd]();
    }
    currentDisplay += input + '<br>' + result + '<br>> ';
    terminal.innerHTML = currentDisplay + '<span id="input"></span><span id="cursor">█</span>';
}

function blinkCursor() {
    const cursor = document.getElementById('cursor');
    setInterval(() => {
        cursor.style.visibility = cursor.style.visibility === 'hidden'? 'visible' : 'hidden';
        }, 500);
    }

document.addEventListener('DOMContentLoaded', init);
    
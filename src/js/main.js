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
        if (trimmedCmd === 'clear') {
            currentDisplay = '> ';
            terminal.innerHTML = currentDisplay + '<span id="input"></span><span id="cursor">█</span>';
            return;
        }
        if (trimmedCmd === 'hack') {
            startHackAnimation();
            return;
        }
    }
    currentDisplay += input + '<br>' + result + '<br>> ';
    terminal.innerHTML = currentDisplay + '<span id="input"></span><span id="cursor">█</span>';
}

function startHackAnimation() {
    terminal.innerHTML = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123'
    const lines = 20;
    const columns = 40;

    function getRandomChar() {
        return chars[Math.floor(Math.random() * chars.length)];
    }

    function createMatrixLine() {
        let line = '';
        for (let i = 0; i < columns; i++) {
            line += getRandomChar();
        }
        return line;
    }

    function updateMatrix() {
        terminal.innerHTML = '';
        for (let i = 0; i < lines; i++) {
            terminal.innerHTML += createMatrixLine() + '<br>';
        }
    }
    const intervalId = setInterval(updateMatrix, 100);

    setTimeout(() => {
        clearInterval(intervalId);
        location.reload();
    }, 6000)
}

function blinkCursor() {
    const cursor = document.getElementById('cursor');
    setInterval(() => {
        cursor.style.visibility = cursor.style.visibility === 'hidden'? 'visible' : 'hidden';
        }, 500);
    }

document.addEventListener('DOMContentLoaded', init);
    
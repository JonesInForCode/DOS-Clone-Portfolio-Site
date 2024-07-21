// commands.js
import {loadingAnimation} from './animations.js';

const commands = {
  help: function () {
    return `
        Available commands: <br>
            - help: Displays this help message. <br>
            - clear: Clears the terminal. <br>
            - about: Displays information about me. <br>
            - projects: List my projects. <br>
            - contact: Contact Me. <br>
            - skills: List my skills. <br>
            - github: Visit my GitHub profile. <br>
            - blueprint: discusses how this site was built. <br>
            - repo: Discusses the source code of this website. <br>
            - gui: Opens my GUI portfolio. <br>
            - hack: Hack this website. DANGER: THIS WILL BREAK THE WEBSITE FOR ABOUT 10 Seconds <br> and then it will auto refresh <br>
        <br>
        Type a command and press "ENTER" to execute it. <br>
            `;
  },
  clear: function () {
    terminal.innerHTML = "";
    return "Terminal cleared. <br>";
  },
  about: function () {
    return `
        Hi there! I'm a Command Line Interface (CLI) terminal. <br>
        I was created to demonstrate the basics of web development. <br>
        My purpose is to provide you with information and guidance on various topics. <br>
        Feel free to explore my commands and learn more about me. <br>
            `;
  },
  projects: function () {
     // Simulate a 3-second loading time
     loadingAnimation();
    return "Loading projects...";
  },
  contact: function () {
    return `
        If you have any questions or need assistance with a specific topic, feel free to reach out to me. <br>
        My email: info@dos-like-portfolio.com <br>
        My phone number: +1 (123) 456-7890 <br>
            `;
  },
  skills: function () {
    return `
        Some of my skills include: <br>
            - HTML, CSS, and JavaScript <br>
            - Java <br>
            - Node.js <br>
            - Command Line Interface (CLI) <br>
            - Git <br>
            `;
  },
  blueprint: function () {
    return `
        This website was built using HTML, CSS, and JavaScript. <br>
        I used the following tools and frameworks: <br>
            - HTML: Mostly to be manipulated by JS in realtime. <br>
            - CSS: For styling the content. Very minimal. <br>
            - JavaScript: The meat of this project. Everything is manipulating the DOM as you go. <br>
            `;
  },
  repo: function () {
    window.open("https://github.com/yourusername/gui-portfolio", "_blank");
    return "Opening site repo in a new tab. <br>";
  },
  github: function () {
    return `
        You can find my code on my GitHub profile: <br>
        https://github.com/yourusername <br>
        Feel free to explore my repositories and contribute to them! <br>
            `;
  },
  gui: function () {
    window.open("https://github.com/yourusername/gui-portfolio", "_blank");
    return "Opening GUI portfolio in a new tab. <br>";
  },
  hack: function () {
    return "This website is a showcase for my skills and knowledge. I am not designed to be hacked. <br>";
  },

  // Add more commands here
};

export default commands;

// commands.js

const commands = {
    help: function() {
        return `
        Available commands:
            - help: Displays this help message.
            - clear: Clears the terminal.
            - about: Displays information about me.
            - projects: List my projects.
            - contact: Contact Me.
            - skills: List my skills.
            - github: Visit my GitHub profile.
            - gui portfolio: Open my GUI portfolio.

        Type a command and press "ENTER" to execute it.
            `;
    },

    // Add more commands here

};

export default commands;
//animations.js

export const loadingAnimation = () => {
    const frames = ['|', '/', '-', '\\'];
    let frameIndex = 0;

    return setInterval(() => {
        const terminal = document.getElementById('terminal');
        terminal.innerHTML = `Loading projects... ${frames[frameIndex]}`;
        frameIndex = (frameIndex + 1) % frames.length;
    }, 200);
}
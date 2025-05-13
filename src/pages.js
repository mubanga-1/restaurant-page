function clearScreen() {
    const content = document.querySelectorAll("#content > *");
    for (let i = 0; i < content.length; i++) {
        document.removeChild(content[i]);
    }
}
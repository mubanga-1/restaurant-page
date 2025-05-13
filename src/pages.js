function clearScreen() {
    const content = document.querySelectorAll("#content > *");
    for (let i = 0; i < content.length; i++) {
        document.querySelector("#content").removeChild(content[i]);
    }
}

export { clearScreen };
export { createHome } from "./home.js";
export { createMenu } from "./menu.js";
export { createContact } from "./contact.js";
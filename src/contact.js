// Import createDomElement from utils.js
import { createDomElement, appendChildren, addText } from "./utils.js";

// Default import text from contact.txt as a string
import contact from "./contact.txt";

const contactInfo = contact.split("\n");

// Used to display contact information on page 
function createContact() {
    const containerDiv = document.querySelector("#content");
    containerDiv.style.width = "100%";
    containerDiv.style.display = "flex";
    containerDiv.style.flexDirection = "column";
    containerDiv.style.justifyContent = "center"; 
    containerDiv.style.alignItems = "center";

    const infoContainer = createDomElement({type: "div", id: "info", classList: [], text: ""});

    // Split contactInfo into more specific arrays of information
    const phone = [];
    const email = [];
    const socialMedia = [];

    for (let i = 0; i < contactInfo.length; i++) {
        if (i < 2) phone.push(contactInfo[i]);
        else if (i < 4) email.push(contactInfo[i]);
        else socialMedia.push(contactInfo[i]);
    }

    // Create containers of information
    const phoneSection = createDomElement({type: "div", id: "service", classList: ["side"], text: ""});
    addText(phoneSection, phone);

    const emailSection = createDomElement({type: "div", id: "service", classList: ["side"], text: ""});
    addText(emailSection, email);


    const socialMediaSection = createDomElement({type: "div", id: "service", classList: ["side"], text: ""});
    addText(socialMediaSection, socialMedia);


    const miniSections = [phoneSection, emailSection, socialMediaSection];
    appendChildren(infoContainer, miniSections);

    containerDiv.appendChild(infoContainer);
}

export { createContact };
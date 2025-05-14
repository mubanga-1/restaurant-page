// Useful for clearing the main content of the browser window
function clearScreen() {
    const content = document.querySelectorAll("#content > *");
    for (let i = 0; i < content.length; i++) {
        document.querySelector("#content").removeChild(content[i]);
    }
}

// Useful for efficienty creating new DOM elements
function createDomElement(elementObject) {
    let newElement;

    if (typeof elementObject.type === "string") {
        newElement = document.createElement(elementObject.type);
    } else {
        throw TypeError(`${elementObject.type} field was not passed in as a string!`);
    }

    newElement.id = elementObject.id;
    newElement.classList = elementObject.classList;
    newElement.innerText = elementObject.text;

    return newElement;

}

// Useful for appending more that one child at a time
function appendChildren(parent, children) {
    children.forEach((child) => {
        parent.appendChild(child);
    });
} 

// Useful for appending lines of text to a DOM element more efficiently
function addText(element, textArray) {
    for (let i = 0; i < textArray.length; i++) {
        element.innerHTML += `${textArray[i]}<br>`;
    }
}


export { createDomElement, clearScreen, appendChildren, addText };
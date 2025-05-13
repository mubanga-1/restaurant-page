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


export { createDomElement };
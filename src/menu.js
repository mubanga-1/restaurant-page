// Default import text from menu.txt as a string
import menu from "./menu.txt";

// Import createDomElement function from utlls.js
import { createDomElement, appendChildren } from "./utils";


// Separate menu options into diferent arrays and store then in an object
function getOptions () {    
    const menuInfo = menu.split("\n");

    const options = {
        coffee: [],
        tea: [],
        pastries: [],
        sandwiches: [],
    };

    // Gets the appropriate items based off of the start of one option and the ending of another in menu.txt
    for (let i = 0; i < menuInfo.length; i++) {
        if (i < 7) {
            options.coffee.push(menuInfo[i]);
        } else if (i < 13) {
            options.tea.push(menuInfo[i]);
        } else if (i < 19) {
            options.pastries.push(menuInfo[i]);
        } else {
            options.sandwiches.push(menuInfo[i]);
        }
    }

    // Puts the options in an array and then returns it
    const optionsList = [];
    
    for (let option in options) {
        optionsList.push(options[option]);
    }

    return optionsList;
}

// Tracks the index of the currently displayed menu option for toggle control
let activeOption;

// Get seperated menu options and store the in an array 
const menuOptions = getOptions();

// Contains functionality for displaying an option onto the page
function displayOption (option, container, optionIndex) {
    // create Header for list of menu items
    const menuHeader = createDomElement({type: "div", id:"menu-header", classList: [], text:`${option[0]}`});
    // create list for menu items
    const menuList = createDomElement({type: "ul", id:"menu-list", classList: [], text:""});  

    // Make display indicators
    const indicatorWrapper = createDomElement({type: "div", id:"indicators", classList: [], text:""});

    // create indicators
    for (let i = 0; i < menuOptions.length; i++) {
        let indicator = createDomElement({type: "div", id:`${i + 1}`, classList: ["indicator"], text:""});

        // Makes visual indication as to what option number the user is on
        if (i == optionIndex) {
            indicator.style.backgroundColor = "#8c8c8c";    
        }
        
        indicatorWrapper.appendChild(indicator);
    }

    // Add items in options array to menuList
    for (let i = 1; i < option.length; i++) {
        const item = createDomElement({type: "li", id:"", classList: ["menu-item"], text:`${option[i]}`})
        menuList.appendChild(item);      
    }

    const menuContents = [menuHeader, menuList, indicatorWrapper];
    appendChildren(container, menuContents);

    activeOption = optionIndex;
}

// clears menu content
function clearMenu() {
    const menuContent = document.querySelectorAll("#menu-content > *");
    for (let i = 0; i < menuContent.length; i++) {
        document.querySelector("#menu-content").removeChild(menuContent[i]);
    }
}


// Get's called when menu button is clicked on page
function createMenu() {

    const containerDiv = document.querySelector("#content");
    containerDiv.style.display = "flex";
    containerDiv.style.flexDirection = "row";
    containerDiv.style.width = "100%";
    containerDiv.style.gap = "1.25rem";
    containerDiv.style.justifyContent = "center";
    containerDiv.style.height = "60vh";

    // create text block and scroll buttons for menu 
    const leftScroller = createDomElement({type: "div", id:"left", classList: ["scroll"], text:"<"});
    const menu = createDomElement({type: "div", id:"menu-content", classList: [], text:""});
    const rightScroller = createDomElement({type: "div", id:"right", classList: ["scroll"], text:">"});  

    const menuComponents = [leftScroller, menu, rightScroller];
    appendChildren(containerDiv, menuComponents)

    // Displays the first option by default 
    displayOption(menuOptions[0], menu, 0);


    // Switches to the option with a lower index assuming the current one's index is greater than zero
    leftScroller.addEventListener("click", () => {
        if (activeOption > 0) {
            clearMenu();
            activeOption--;

            displayOption(menuOptions[activeOption], menu, activeOption);
        }
    })

    // Switches to the option with a higher index assuming the current one's index is lower than menuOption.length - 1
    rightScroller.addEventListener("click", () => {
        if (activeOption < menuOptions.length - 1) {
            clearMenu();
            activeOption++;

            displayOption(menuOptions[activeOption], menu, activeOption);            
        } 
    });
}

export { createMenu };
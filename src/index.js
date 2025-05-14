// Apply styles through "side effect" importing
import "./styles.css";  

// Import function for adding sections to pages depending on which tab the user is on
import { createHome, createMenu, createContact, clearScreen } from "./pages.js";

// Used to change the colors of navigation buttons to show which tab has been selected
function highlight(element) {
    element.style.backgroundColor = "#f1f2f3";
    element.style.color = "#A67B5B";
}

// Used to change the colors of navigation buttons to show that the user has changed their tab
function unhighlight(element) {
    element.style.backgroundColor = "";
    element.style.color = "";
}

// Display the homepage's content when page loads for first time
document.addEventListener("DOMContentLoaded", () => {
    highlight(document.querySelector("#home"));
    createHome();
});


const navBtnContainer = document.querySelector(".links");
const buttons = document.querySelectorAll(".links button");

// Detects when a navigation button is clicked and makes it visually apparent as which one
navBtnContainer.addEventListener("click", (event) => {
    let target = event.target;
    clearScreen();
    
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].id === target.id) {
            highlight(buttons[i]);

            // Change between what information to display based on which navigation button is clicked
            switch(target.id) {
                case "home":
                    createHome();
                    break;

                case "menu":
                    createMenu();
                    break;

                case "contact":
                    createContact();
                    break;
            }

        } else {
            unhighlight(buttons[i]);
        }
    }
});
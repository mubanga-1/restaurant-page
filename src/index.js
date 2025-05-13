import "./styles.css";  
import {createHome} from "./home.js";

function highlight(element) {
    element.style.backgroundColor = "#f1f2f3";
    element.style.color = "#A67B5B";
}

function unhighlight(element) {
    element.style.backgroundColor = "";
    element.style.color = "";
}

// Display the homepage's content when page loads for first time
document.addEventListener("DOMContentLoaded", () => {
    highlight(document.querySelector("#home"));
    createHome();
});

// Change between what information to display based on which navigation button is clicked

const navBtnContainer = document.querySelector(".links");
const buttons = document.querySelectorAll(".links button");

navBtnContainer.addEventListener("click", (event) => {
    let target = event.target;
    
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].id === target.id) {
            highlight(buttons[i]);
        } else {
            unhighlight(buttons[i]);
        }
    }
});
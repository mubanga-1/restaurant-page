import "./styles.css";  
import {createHome} from "./home.js";


const homeBtn = document.querySelector("#home");

homeBtn.addEventListener("click", () => {
    createHome();
})
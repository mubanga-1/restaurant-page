// Default import text from advertisement.txt as a string
import advert from "./advertisement.txt";

// Default import text from hours.txt as a string
import hours from "./hours.txt";

// Default import text from address.txt
import address from "./address.txt";

// Import createDomElement function from utlls.js
import { createDomElement, appendChildren, addText } from "./utils";


const advertInfo = advert.split("\n");
const hoursInfo = hours.split("\n");
const addressInfo = address.split("\n");


const homePage = (function() {
    // Modify content div in order to add content for home page
    const containerDiv = document.querySelector("#content"); 

    function createAdSection() {
        // Create container for advertisement
        const adContainer = createDomElement({type: "div", id:"", classList: ["ad"], text:""});

        // Create heading for advertisement
        const adHeading = createDomElement({type: "div", id:"ad-heading", classList: [], text: advertInfo[0]});
        adContainer.appendChild(adHeading);

        // Create paragraphs and add content to each paragraph
        const paragraphs = [];
        for (let i = 0; i < 3; i++) {
            paragraphs.push(document.createElement("p"));
        }
        
        // Populates each paragraph within the paragraphs array with the appropriate text
        for (let i = 1; i < advertInfo.length; i++) {
            if (i < 4) {
                paragraphs[0].innerHTML += `${advertInfo[i]}<br>`;
            } else if (i < 11) {
                paragraphs[1].innerHTML += `${advertInfo[i]}<br>`;
            } else {
                paragraphs[2].innerHTML += `${advertInfo[i]}<br>`;
            }
        }

        // Add each paragraph to advertisement container
        paragraphs.forEach((paragraph) => {
            adContainer.appendChild(paragraph);
        });

        return adContainer;
    }


    function createHoursSection() {
        // Create a container for displaying hours on the screen
        const hours = createDomElement({type: "div", id: "service", classList: ["side"], text: ""})

        // Create heading for hours container
        const hoursHeading = createDomElement({type: "div", id: "", classList: ["info-heading"], text: "⏰ Hours"});
        hours.appendChild(hoursHeading);

        
        // Create list for Actual Days
        const days = createDomElement({type: "ul", id: "days", classList: [], text: ""});
        days.id = "days";
        
        // Append specific information from files 
        for (let i = 0; i < hoursInfo.length; i++) {
            if (!(i === 0) && !(i === 7)) {
                let day = createDomElement({type: "li", id: "", classList: [], text: hoursInfo[i]});
                days.appendChild(day); 

            } else if (hoursInfo[i] == "") {
                days.appendChild(document.createElement("br"));

            } else {
                let subHeading = createDomElement({type: "div", id: "", classList: ["sub-heading"], text: hoursInfo[i]});
                days.appendChild(subHeading);
            }
        }

        hours.appendChild(days);

        return hours;
    }


    function createLocationSection() {
        // Create container for location address
        const location = createDomElement({type: "div", id: "location", classList: ["side"], text: ""});

        // Create heading for location div
        const locationHeading = createDomElement({type: "div", id: "", classList: ["info-heading"], text: "📍 Location"});
        location.appendChild(locationHeading);

        // Create content wrapper for location text
        const locationContent = createDomElement({type: "div", id: "location-content", classList: [], text: ""});;
        addText(locationContent, addressInfo);

        location.appendChild(locationContent);

        return location;
    }

    function createHome() {
        containerDiv.style.display = "grid";
        containerDiv.style.gridTemplateColumns = "6fr 2fr";
        containerDiv.style.height = "60vh"; 

        const adSection = createAdSection();
        const hoursSection = createHoursSection();
        const locationSection = createLocationSection();

        const sections = [adSection, hoursSection, locationSection]
        appendChildren(containerDiv, sections);        
    }

    return { createHome };

})();

export const createHome = homePage.createHome;
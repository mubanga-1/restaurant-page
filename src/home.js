// Default import text from advertisement.txt as a string
import advert from "./advertisement.txt";

// Default import text from hours.txt as a string
import hours from "./hours.txt";


const advertInfo = advert.split("\n");
const hoursInfo = hours.split("\n");


function createHome () {
    // Modify content div in order to add content for home page
    const containerDiv = document.querySelector("#content");
    // containerDiv.style.display = "grid";
    // containerDiv.style.gridTemplateColumns = "4fr 1fr";
    // containerDiv.style.width = "80%";
    containerDiv.style.color = "white"; 
    
    // Create container for advertisement
    const adContainer = document.createElement("div");
    adContainer.className = "ad";

    // Create heading for advertisement
    const adHeading = document.createElement("div");
    adHeading.id = "ad-heading";
    adHeading.innerText = advertInfo[0];

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

    // Add advetisement container to content container
    containerDiv.appendChild(adContainer);


    // Create a container for displaying hours on the screen
    const hours = document.createElement("div");
    hours.id = "service";
    hours.className = "side";
    hours.style.padding = "22px";

    // Create heading for hours container
    const hoursHeading = document.createElement("div");
    hoursHeading.className = "info-heading";
    hoursHeading.innerText = "Hours";

    hours.appendChild(hoursHeading);

    // Create list for Actual Days
    const days = document.createElement("ul");
    days.id = "days";
    
    for (let i = 0; i < hoursInfo.length; i++) {
        if (!(i === 0) && !(i === 7)) {
            let day = document.createElement("li");
            day.innerText = hoursInfo[i];
            days.appendChild(day); 

        } else if (hoursInfo[i] == "") {
            days.appendChild(document.createElement("br"));

        } else {
            let subHeading = document.createElement("div");
            subHeading.className = "sub-heading";
            subHeading.innerText = hoursInfo[i];
            days.appendChild(subHeading);
        }
    }

    hours.appendChild(days);
    containerDiv.appendChild(hours);    
}

createHome();

export {createHome};
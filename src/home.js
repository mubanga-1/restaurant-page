// Default import text from advertisement.txt as a string
import advert from "./advertisement.txt";


const advertInfo = advert.split("\n");


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
    adHeading.className = "ad-heading";
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


    paragraphs.forEach((paragraph) => {
        adContainer.appendChild(paragraph);
    });


    containerDiv.appendChild(adContainer);
    
}

createHome();

export {createHome};
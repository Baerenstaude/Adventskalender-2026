
function changeBackgroundColor() {
    // Hintergrundfarbe der gesamten Seite ändern
    let backgroundColor = document.body.style.backgroundColor;

    if (backgroundColor === "grey" || backgroundColor === "") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "darkblue";
    } else if (backgroundColor === "white") {
        document.body.style.backgroundColor = "pink";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "grey";
        document.body.style.color = "white";
    }

    // Hintergrundfarbe der Kapitelüberschrift ändern
    let chapterHeading = document.getElementById("chapter-heading");
    let chapterColor = chapterHeading.style.backgroundColor;

    if (chapterColor === "grey" || chapterColor === "") {
        chapterHeading.style.backgroundColor = "white";
    } else if (chapterColor === "white") {
        chapterHeading.style.backgroundColor = "pink";
    } else {
        chapterHeading.style.backgroundColor = "grey";
    }

    // Schriftfarbe der Kapitelüberschrift anpassen
    if (chapterHeading.style.backgroundColor === "white") {
        chapterHeading.style.color = "darkblue";
    } else {
        chapterHeading.style.color = "white";
    }
}



// Adventskalender automatisch erstellen
const kalender = document.getElementById("calendar-grid");

for (let tag = 1; tag <= 24; tag++) {

    const button = document.createElement("button");

    // Deine bisherige Funktion aufrufen
    button.onclick = function() {
        showImage(this);
    };

    const bild = document.createElement("img");

    bild.src = `img/${tag}.png`;
    bild.alt = tag + ". Dezember";

    button.appendChild(bild);
    button.appendChild(document.createTextNode(tag));

    kalender.appendChild(button);
}


// Bilder beim Anklicken anzeigen
function showImage(buttonElement) {

    const img = buttonElement.querySelector("img");

    if (img) {
        img.style.display = "block";
        buttonElement.style.border = "none";
        buttonElement.style.color = "transparent";
        buttonElement.style.cursor = "default";
        buttonElement.disabled = true;

        // Hover-Effekt entfernen
        buttonElement.classList.add("no-hover");
    }
}

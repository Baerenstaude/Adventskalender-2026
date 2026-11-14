
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


function showImage(buttonElement) {
       let Türchenzahl = document.getElementById("container button");
       const img = buttonElement.querySelector('img');
       
    if (img) {
        img.style.display = 'block'; // Zeige das Bild an
        buttonElement.style.border = 'none';
        buttonElement.style.color = 'transparent';
        buttonElement.style.cursor = 'default';
        buttonElement.disabled = true; // Button deaktivieren
         // Füge die Klasse hinzu, die den Hover-Effekt entfernt
            buttonElement.classList.add('no-hover');
        // Füge die Klasse hinzu, die den Hover-Effekt entfernt
        buttonElement.classList.add('no-hover');
}   

  }
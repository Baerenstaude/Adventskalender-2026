function changeBackgroundColor() {
    // Hintergrundfarbe abrufen
    let backgroundColor = document.body.style.backgroundColor;
    
    // Hintergrundfarbe ändern
    if (backgroundColor === "grey") {
        document.body.style.backgroundColor = "white";
    } else if (backgroundColor === "white") {
        document.body.style.backgroundColor = "pink";
    } else {
        document.body.style.backgroundColor = "grey";
    }
    
    // Textfarbe abrufen
    let color = document.body.style.color;
    
    // Textfarbe ändern
    if (backgroundColor === "grey") {
        document.body.style.color = "black";
    } else {
        document.body.style.color = "white";
    }
    
    // Kapitelüberschrift Farbe ändern
    let chapterHeading = document.getElementById("chapterheading"); // Beispiel für den Zugriff auf das Element
    let chapterColor = chapterHeading.style.color;
    
    if (chapterColor === "grey") {
        chapterHeading.style.color = "white";
    } else if (chapterColor === "white") {
        chapterHeading.style.color = "pink";
    } else {
        chapterHeading.style.color = "grey";
    }
    }
let count = 0
let disp = document.getElementById("display");

function myFunction(){
    console.log("hello world")
    console.log("clicked " + count + " times...")
    count ++;
    disp.innerHTML = count;
}

function changeBackgroundColor() {
    // Hintergrundfarbe abrufen
    let backgroundColor = document.body.style.backgroundColor;
    
    // Hintergrundfarbe ändern
    if (backgroundColor !== "grey") {
    document.body.style.backgroundColor = "grey";
    } else {
    document.body.style.backgroundColor = "pink";
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
    
    if (chapterColor !== "grey") {
    chapterHeading.style.color = "grey";
    } else {
    chapterHeading.style.color = "pink";
    }
    }
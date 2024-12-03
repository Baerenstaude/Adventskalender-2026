let count = 0
let disp = document.getElementById("display");

function changeBackgroundColor(){
    console.log("hello world")
    console.log("clicked " + count + " times...")
    count ++;
    disp.innerHTML = count;
}

function changeBackgroundColor(){
    color = document.body.style.backgroundColor
    if (color = "grey"){
        document.body.style.backgroundColor = "white"
    } if (color = "white") { 
        document.body.style.color = "pink"
    } else {
        document.body.style.backgroundColor = "grey"
    }
    
    color = document.body.style.color
    if (color != "white"){
        document.body.style.color = "white"
    } else {
        document.body.style.color = "black"
    }
    
    color = document.chapterheading.style.color
    if (color = "grey"){
        document.chapterheading.style.color = "white"
    } if (color = "white") { 
        document.chapterheading.style.color = "pink"
    }else {
        document.chapterheading.style.color = "grey"
    }
}
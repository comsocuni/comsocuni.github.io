let slide = document.getElementById("slide");
console.log(slide)
let upArrow= document.getElementById("upArrow");
let downArrow= document.getElementById("downArrow");

let element = document.querySelector(".review-box");

let elementStyle = window.getComputedStyle(element);

let elementHeight = elementStyle.getPropertyValue('height');

console.log(elementHeight)

elementHeight = elementHeight.replace('px', '')

let height = Number.parseInt(elementHeight, 10)

let heightMin = -height * 5

let x = 0;

downArrow.onclick = function() {
    if(x > heightMin) {
        x = x - height;
        slide.style.top = x + "px"; 
    }
}

upArrow.onclick = function() {
    if(x < 0) {
        x = x + height;
        slide.style.top = x + "px"; 
    }
}
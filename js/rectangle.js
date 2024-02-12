

function ractangleCalculateArea() {
    
const ractangleLenghtArea = document.getElementById('rectangle-length');
const rectangleLength = ractangleLenghtArea.value;
const length = parseFloat(rectangleLength);
// console.log(length)


const rectangleWidthArea = document.getElementById('rectangle-width');
const rectangleWidth = rectangleWidthArea.value ;
const width = parseFloat(rectangleWidth)
// console.log(width)


//calculate area A = w  * i

const rectangleResult = length * width 

const calculatedResult = document.getElementById('rectangle-result');
calculatedResult.innerText = rectangleResult ;

}


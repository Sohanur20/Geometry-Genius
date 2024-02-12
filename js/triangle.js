
/**
 * 
 * 
 * 
 */

function calculateTriangleArea() {
//  triangle ar bhumi
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)

    // console.log(base)

    //triangle ar utchota
    const triangleBaseHeightInput = document.getElementById('triangle-height');
    const triangleBaseHeightInputText = triangleBaseHeightInput.value;

    const height = parseFloat(triangleBaseHeightInputText)

    // console.log(height)

//calculate area  ..  0.5 * bhumi * utchota
const area = 0.5 * base * height ;
// console.log(area)

//display triangle-result

const triangleAreaResult = document.getElementById('triangle-result');

triangleAreaResult.innerText = area ;


}

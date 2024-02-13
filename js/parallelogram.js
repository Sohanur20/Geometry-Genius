
// function parallelogramCalculeteArea() {
    
// const baseAreaResult = document.getElementById('parallelogram-base');
// const baseArea = baseAreaResult.value ;
// const baseResult = parseFloat(baseArea)
// // console.log(baseResult)


// const heightAreaResult = document.getElementById('parallelogram-height');
// const heightArea = heightAreaResult.value ;
// // console.log(heightArea)
// const heightResult = parseFloat(heightArea);
// // console.log(heightResult)

// const calculate = baseResult * heightResult
// const totalResult = document.getElementById('parallelogram-result');

// totalResult.innerText = calculate ;

// }


function parallelogramCalculeteArea() {
    
const base = getInputValueById('parallelogram-base')

// console.log(base)

const height = getInputValueById('parallelogram-height');
// console.log(height)

const area = base * height ;

const result = document.getElementById('parallelogram-result')
result.innerText = area ;


}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId)
    const valueText  = inputField.value ;
    const inputValue = parseFloat(valueText)
    return inputValue ;
}
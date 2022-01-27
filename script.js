// Create a webpage with a 16x16 grid of square divs using JS
let container = document.querySelector('.grid-container');
let eraser = document.querySelector('.erase')
let valBox = document.getElementById('val-box');
let rangeSlider = document.querySelector('.range-slider')
let colorPicker = document.getElementById('colorpicker');

let colorValue = 'orange';
let gridNumber = 16;

paint(gridNumber)

container.addEventListener("mouseover", changeDisplay);
eraser.addEventListener("click", erase);
rangeSlider.addEventListener("input", showVal)
rangeSlider.addEventListener("change", showVal)
colorPicker.addEventListener("change", changeColor)



function changeDisplay(e){
    changeColor();
    e.target.style.backgroundColor = colorValue;
}
function changeColor(){
    colorValue = colorPicker.value;
    return colorValue
}

function erase(){
    clearGrid()
    paint(gridNumber)
    
}

function compare_input (){
    let player_input = prompt('What size grid?');
    player_input = parseInt(player_input);

    //if not.. reprompt till you get right answer
    while (player_input < 0 || player_input > 100 || isNaN(player_input) ) //If the user number matches one of preset numbers
    {
        let player_input = prompt('What size grid?');
        player_input = parseInt(player_input);
    }

    gridNumber =  player_input;
    console.log(gridNumber)
}

function showVal(){
    valBox.innerHTML= rangeSlider.value
    gridNumber = rangeSlider.value
    clearGrid();
    paint(gridNumber)
    
}

function paint(gridNumber)
{
    

    let divSize = (480/gridNumber) - 2;

    for (let i = 0; i < gridNumber; i++){
        let bigDiv = document.createElement('div')
        bigDiv.classList.add('big-div')
        container.appendChild(bigDiv)
        

        for(let j = 0; j < gridNumber; j++)
        {
            let smallDiv = document.createElement('div')
            smallDiv.classList.add('small-div')
            smallDiv.style.width = (divSize + 'px');
            smallDiv.style.height = (divSize + 'px');
            bigDiv.appendChild(smallDiv);
        }
        
    }
}

function clearGrid() {
    container.innerHTML = ''
  }
  
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

// event listner
btn.addEventListener('click', changeColor);


// functions
function changeColor(){
    //get rand number between 0 -3 
    const randomNumber = getRandomNumbers();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
}

function getRandomNumbers(){
    return Math.floor(Math.random() * colors.length);
}

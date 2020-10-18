let winningColor;
let rgbColors = [];
let numOfColors = 6;
let displayedWinningColor = document.querySelector('.winningColor');
let colorBoxs = document.querySelectorAll('.colorBoxs div');
let displayedMessage = document.querySelector('.displayedMessage');
let titleBackground = document.querySelector('.title');
let resetButton = document.querySelector('.resetButton');
let easyButton = document.querySelector('.easyButton');
let hardButton = document.querySelector('.hardButton');

//generate random rgb colors
function getRandomColors() {
  let randomColors;
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return randomColors = `rgb(${red}, ${green}, ${blue})`;
};
//push the random colors to rgbColors array
function randomColors() {
  rgbColors.push(getRandomColors());
};
//run the randomColors() 6 times in order to push 6 random colors to the rgbColors array
for(let i = 0; i < 6; i++) {
    randomColors()
};
//this fuc used later on to reset page
function pushRandomColors(randomColors, numOfColors) {
  //call the randomColors() the num of times based on the game level user selected
  for(let i = 0; i < numOfColors; i++) {
    randomColors()
  }
  //randomly assign winning color on the page
  for(let i = 0; i < rgbColors.length; i++) {
    let random = Math.floor(Math.random() * rgbColors.length);
    displayedWinningColor.innerText = rgbColors[random];
    winningColor = displayedWinningColor.innerText.toLowerCase();;
  }
};
//randomly assign winning color on the page when the page first loaded
for(let i = 0; i < rgbColors.length; i++) {
    let random = Math.floor(Math.random() * rgbColors.length);
    displayedWinningColor.innerText = rgbColors[random];
    winningColor = displayedWinningColor.innerText.toLowerCase();
};
//game logic
for(let i = 0; i < colorBoxs.length; i++) {
  colorBoxs[i].style.backgroundColor = rgbColors[i];
  console.log(colorBoxs[i].innerText);
  colorBoxs[i].addEventListener('click', function() {
    let selectedColor = colorBoxs[i].style.backgroundColor;
    if(selectedColor === winningColor) {
      for(let i = 0; i < colorBoxs.length; i++) {
        colorBoxs[i].style.backgroundColor = winningColor;
        titleBackground.style.backgroundColor = winningColor;
        displayedMessage.style.display = 'block';
        displayedMessage.innerText = 'You won!';
        resetButton.innerText = 'Play Again?'
      }
    } else{
      displayedMessage.style.display = 'block';
      displayedMessage.innerText = 'Try Again!';
    }
  })
};

function resetPage() {
  displayedMessage.style.display = 'none';
  titleBackground.style.backgroundColor = "rgb(136, 89, 158)";
  rgbColors.length = 0;
};

easyButton.addEventListener('click', function() {
  easyButton.classList.add('selected');
  hardButton.classList.remove('selected');
  resetPage();
  numOfColors = 3;
  pushRandomColors(randomColors, numOfColors);
  for(let i = 0; i < colorBoxs.length; i++) {
    if(colorBoxs[i].classList.contains('display')) {
      colorBoxs[i].style.backgroundColor = rgbColors[i];
    } else if(colorBoxs[i].classList.contains('hidden')) {
      colorBoxs[i].style.display = 'none';
    }
  }
});

hardButton.addEventListener('click', function() {
  hardButton.classList.add('selected');
  easyButton.classList.remove('selected');
  resetPage();
  numOfColors = 6;
  pushRandomColors(randomColors, numOfColors);
  for(let i = 0; i < colorBoxs.length; i++) {
    colorBoxs[i].style.display = 'block';
    colorBoxs[i].style.backgroundColor = rgbColors[i];
  }
});

resetButton.addEventListener('click', function() {
  resetPage();
  resetButton.innerText = 'new color';
  pushRandomColors(randomColors, numOfColors);
  for(let i = 0; i < colorBoxs.length; i++) {
    colorBoxs[i].style.backgroundColor = rgbColors[i];
  }
});

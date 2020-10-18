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

function getRandomColors() {
  let randomColors;
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return randomColors = `rgb(${red}, ${green}, ${blue})`;
}

function randomColors() {
  rgbColors.push(getRandomColors());
}

for(let i = 0; i < 6; i++) {
    randomColors()
}

function pushRandomColors(randomColors, numOfColors) {
  for(let i = 0; i < numOfColors; i++) {
    randomColors()
}
  for(let i = 0; i < rgbColors.length; i++) {
    let random = Math.floor(Math.random() * rgbColors.length);
    displayedWinningColor.innerText = rgbColors[random];
    winningColor = displayedWinningColor.innerText.toLowerCase();;
  }
}

for(let i = 0; i < rgbColors.length; i++) {
    let random = Math.floor(Math.random() * rgbColors.length);
    displayedWinningColor.innerText = rgbColors[random];
    winningColor = displayedWinningColor.innerText.toLowerCase();
  }

for(let i = 0; i < colorBoxs.length; i++) {
  colorBoxs[i].style.backgroundColor = rgbColors[i];
  console.log(colorBoxs[i].innerText);
  colorBoxs[i].addEventListener('click', function() {
    let selectedColor = colorBoxs[i].style.backgroundColor;
    if(selectedColor === winningColor) {
      for(let i = 0; i < colorBoxs.length; i++) {
        colorBoxs[i].style.backgroundColor = winningColor;
        titleBackground.style.backgroundColor = winningColor;
        displayedMessage.innerText = 'You won!';
        resetButton.innerText = 'Play Again?'
      }
    } else{
      displayedMessage.innerText = 'Try Again!';
    }
  })
}

easyButton.addEventListener('click', function() {
  easyButton.classList.add('selected');
  hardButton.classList.remove('selected');
  displayedMessage.innerText = '';
  titleBackground.style.backgroundColor = "rgb(136, 89, 158)";
  rgbColors.length = 0;
  numOfColors = 3;
  pushRandomColors(randomColors, numOfColors);
  for(let i = 0; i < colorBoxs.length; i++) {
    if(colorBoxs[i].classList.contains('display')) {
      colorBoxs[i].style.backgroundColor = rgbColors[i];
    } else if(colorBoxs[i].classList.contains('hidden')) {
      colorBoxs[i].style.display = 'none';
    }
  }
})

hardButton.addEventListener('click', function() {
  hardButton.classList.add('selected');
  easyButton.classList.remove('selected');
  displayedMessage.innerText = '';
  titleBackground.style.backgroundColor = "rgb(136, 89, 158)";
  rgbColors.length = 0;
  numOfColors = 6;
  pushRandomColors(randomColors, numOfColors);
  for(let i = 0; i < colorBoxs.length; i++) {
    colorBoxs[i].style.display = 'block';
    colorBoxs[i].style.backgroundColor = rgbColors[i];
  }
})

resetButton.addEventListener('click', function() {
  titleBackground.style.backgroundColor = "rgb(136, 89, 158)";
  displayedMessage.innerText = "";
  resetButton.innerText = 'new color';
  rgbColors.length = 0;
  pushRandomColors(randomColors, numOfColors);
  for(let i = 0; i < colorBoxs.length; i++) {
  colorBoxs[i].style.backgroundColor = rgbColors[i];
  }
})

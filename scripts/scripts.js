let gridWidth
let boxAmount
let eachBox
let randomRBG
let blackR = 255;
let blackB = 255;
let blackG = 255;
let nowOpacity;

const makeGridBtn = document.querySelector('.make-grid')
makeGridBtn.addEventListener('click', makeGrid);

const gridContainer = document.querySelector('.grid-container')

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', gridRemove);

const eraseBtn = document.querySelector('.erase')
eraseBtn.addEventListener('click', makeWhite);

const colorBtn = document.querySelector('.colorful')
colorBtn.addEventListener('click', colorful);

function makeGrid() {
    gridRemove();
    getNumber ();

    boxAmount = gridWidth * gridWidth;

    let boxWidth = (500 / gridWidth) + 'px';
    
    for (let i = 0; i < boxAmount; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = boxWidth; 
        box.style.height = boxWidth;
        gridContainer.appendChild(box);
    };

    assignBoxes ();
    makeBlack ();
};

function assignBoxes () {
    eachBox = document.querySelectorAll('.box');
    return eachBox; //returns a nodelist
}

function makeBlack () {
    for (i = 0; i < eachBox.length; i++) {
        eachBox[i].onmouseover = function () { 
            this.style.background = 'black';
            if (this.style.opacity == '') {
                nowOpacity = 0.1
                this.style.opacity = nowOpacity;
            } else {
                nowOpacity = Number(this.style.opacity) + 0.1;
                this.style.opacity = nowOpacity;
            };
        };
    };
};

function makeWhite () {
    for (i = 0; i < eachBox.length; i++) {
        eachBox[i].onmouseover = function () { this.style.background = 'white'}
    }  
}

function getNumber () {
    gridWidth = prompt('How many boxes wide? (Not too high!)');
    gridWidth = Math.floor(gridWidth);

    if (isNaN(gridWidth) || gridWidth == null || gridWidth == '' || gridWidth < 0) {
        alert('That is not a valid response, please try again.');
    }
    return gridWidth;
}

function gridRemove () {
    if (gridWidth != undefined) {
        gridContainer.querySelectorAll('.box').forEach(n => n.remove());
    }
}

function randomColor () {
    let randomR = Math.floor(Math.random() * 256);
    let randomB = Math.floor(Math.random() * 256);
    let randomG = Math.floor(Math.random() * 256);
    randomRBG = 'rgb(' + randomR + ' ,' + randomB + ' ,' + randomG + ')';
    return randomRBG;
}

function colorful () {
    for (i = 0; i < eachBox.length; i++) {
        eachBox[i].onmouseover = function () {
            randomColor ();
            this.style.background = randomRBG}
    }
};
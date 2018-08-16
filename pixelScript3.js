console.log(`pixelScipt.js working`);

document.addEventListener(`DOMContentLoaded`, (ev) => {

    // MAKE TABLE TO CONTAIN EVERYTHING
    const table = document.createElement('table');
    document.body.appendChild(table);
    table.align = `center`;

    // MAKE H1 ELEMENT FOR TITLE
    const h1 = document.createElement(`h1`);
    table.appendChild(h1);
    h1.textContent = `Pixel Art Maker`;

    // MAKE ROW-COLUMN TO CONTAIN CANVAS
    const canvasTr = document.createElement(`tr`);
    const canvasTd = document.createElement(`td`);
    canvasTr.appendChild(canvasTd);
    table.appendChild(canvasTr);

    // MAKE ROW-COLUMN TO CONTAIN CURRENT COLOR
    const currentColorTr = document.createElement(`tr`);
    const currentColorTd = document.createElement(`td`);
    currentColorTr.appendChild(currentColorTd);
    table.appendChild(currentColorTr);
    
    // MAKE ROW-COLUMN TO CONTAIN PALETTE
    const paletteTr = document.createElement(`tr`);
    const paletteTd = document.createElement(`td`);
    paletteTr.appendChild(paletteTd);
    table.appendChild(paletteTr);

    // MAKE ROW-COLUMN TO CONTAIN FILL
    const fillTr = document.createElement(`tr`);
    const fillTd = document.createElement(`td`);
    fillTr.appendChild(fillTd);
    table.appendChild(fillTr);

    
    let currentColor;
    let rowId;
    // DIFINE 20 X 20 DIV CANVAS WITH IDs
    for (let i = 0; i < 20; i++) {
        rowId = i;
        for (let j = 0; j < 20; j++) {
            const canvasDiv = document.createElement('div');
            canvasDiv.setAttribute(`class`, `canvasDiv`);
            canvasDiv.id = `${rowId}/${j}`;
            canvasDiv.textContent = `${rowId}, ${j}`;
            canvasTd.appendChild(canvasDiv);
        };
    };

    // DEFINE CURRENT COLOR DIV
    const currentColorDiv = document.createElement('div');
    currentColorDiv.setAttribute(`class`, `currentColorDiv`);
    currentColorDiv.id = `currentColorDiv`;
    currentColorTd.appendChild(currentColorDiv);
    currentColorDiv.style.width = `440px`;
    
    // DEFINE PALETTE ARRAY
    let palColorArr = [`red`, `orange`, `yellow`, `green`, `blue`, `indigo`, `violet`, `white`, `gray`, `black`];
    let palClassArrLen = 95/(palColorArr.length);

    // BUILD PALETTE DIVS
    for (let k = 0; k < palColorArr.length; k++) {
        const paletteDiv = document.createElement('div');
        paletteDiv.setAttribute(`class`, `paletteDiv`);
        paletteDiv.id = `${palColorArr[k]}`;
        paletteDiv.style.backgroundColor = `${palColorArr[k]}`;
        paletteDiv.style.width= `${palClassArrLen}%`;
        paletteTd.appendChild(paletteDiv);
        
    };
    // PALETTE EVENT LISTENER SETS currentColorDiv and fillDiv
    paletteTd.addEventListener('click', (ev) => {
        if (ev.target.classList.contains('paletteDiv')) { 
            // get the color of the target,
            let colorId = ev.target.style.backgroundColor; 
            // MAYBE NEED TO USE ID LATER?
            currentColorDiv.setAttribute(`id`, `colorId`)
            // fillDiv.setAttribute('id', colorId)
            currentColorDiv.style.backgroundColor = `${colorId}`;
            fillDiv.style.backgroundColor = `${colorId}`;
            return colorId;
        }
    })  

    // MODIFIED FROM BLYTHE
    let down = false;
    // Listens for mouse press and release on canvas. true = pressed, sets false = released;
    canvasTd.addEventListener('mousedown', (ev)=> {
        down = true;
    })
    canvasTd.addEventListener('mouseup', (ev) => {
        down = false;
    })
    //makes sure colors won't be filled when mouse leaves canvas
    canvasTd.addEventListener('mouseover', (ev) => {
        if(down && ev.target.className === 'canvasDiv') {
            ev.target.style.backgroundColor = document.getElementById(`colorId`).style.backgroundColor;
        }
    })
    canvasTd.addEventListener(`click`, (ev) => {
        if (ev.target.className === `canvasDiv`) {
            // currentPixel = ev.target;
            ev.target.style.backgroundColor = document.getElementById(`colorId`).style.backgroundColor;
        }
    });

    // MAKE FILL DIV
    const fillDiv = document.createElement('div');
    fillDiv.textContent = `> CLICK HERE TO FILL <`;
    fillDiv.setAttribute(`class`, `currentColorDiv`);
    fillDiv.id = `fillDiv`;
    fillTd.appendChild(fillDiv);
    fillDiv.style.width = `440px`;

    // IF FILL BUTTON IS PRESSED
    // listen for click and send ID to function
    let fillToggle = false;
    fillDiv.addEventListener('click', (ev) => {
        fillToggle = true;
        console.log(fillToggle);
    });

    // canvasTd.addEventListener('click', (ev) => {
    //     currentColor = document.getElementById(`currentColorDiv`);
    //     let clickedDiv = ev.target.id;
    //     // currentInput = document.getElementById(`inputColor`);

    //     // using class for set palette
    //     // if (currentInput) {
    //     //     canvasDiv.style.background = (currentInput.value);
    //     // };
    //     // if (currentColor) {
    //         clickedDiv.setAttribute(`class`, currentColor.className);
    //     // };
        
    //     // using value from color input

    //     // THIS MAY BE PART OF GETTING THE MOUSE BEHAVIOR WORKING
    //     //EventTarget
    //     // MDN's "simple" example confuses the Hell out of me
    // });
});
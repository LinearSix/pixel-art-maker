console.log(`pixelScipt.js working`);

document.addEventListener(`DOMContentLoaded`, (ev) => {

    // MAKE TABLE TO CONTAIN EVERYTHING
    const table = document.createElement('table');
    document.body.appendChild(table);
    table.align = `center`;
    table.style.alignContent = `center`;
    table.width = `339px`;

    // MAKE H1 ELEMENT FOR TITLE
    const h1 = document.createElement(`h1`);
    table.appendChild(h1);
    h1.textContent = `Pixel Art Maker`;

    // MAKE ROW-COLUMN TO CONTAIN CANVAS
    const canvasTr = document.createElement(`tr`);
    table.appendChild(canvasTr);
    const canvasTd = document.createElement(`td`);
    canvasTr.appendChild(canvasTd);

    // MAKE ROW-COLUMN TO CONTAIN CURRENT COLOR
    const currentTr = document.createElement(`tr`);
    table.appendChild(currentTr);
    const currentTd = document.createElement(`td`);
    currentTr.appendChild(currentTd);
    
    // MAKE ROW-COLUMN TO CONTAIN PALETTE
    const paletteTr = document.createElement(`tr`);
    table.appendChild(paletteTr);
    const paletteTd = document.createElement(`td`);
    paletteTr.appendChild(paletteTd);

    // MAKE ROW-COLUMN TO CONTAIN FILL
    const fillTr = document.createElement(`tr`);
    table.appendChild(fillTr);
    const fillTd = document.createElement(`td`);
    fillTr.appendChild(fillTd);

    let currentColor;
    let rowId;
    // define my canvas div layout and add 
    for (let i = 0; i < 20; i++) {
        rowId = i;
        for (let j = 0; j < 20; j++) {
            const canvasDiv = document.createElement('div');
            canvasDiv.setAttribute(`class`, `canvasDiv`);
            canvasDiv.id = `${rowId}, ${j}`;
            // canvasDiv.textContent = `${rowId}, ${j}`;
            canvasTd.appendChild(canvasDiv);

            canvasDiv.addEventListener('click', (ev) => {
                currentColor = document.getElementById(`currentDiv`);
                canvasDiv.setAttribute(`class`, currentColor.className);
            });
        };
    };

    // MAKE PALETTE
    // make current color div
    let palClassName = [`red`, `orange`, `yellow`, `green`, `blue`, `indigo`, `violet`, `white`, `gray`, `black`];
    let palClassArrLen = 94/(palClassName.length);

    const currentDiv = document.createElement('div');
    currentDiv.setAttribute(`class`, `currentDiv`);
    currentDiv.id = `currentDiv`;
    currentTd.appendChild(currentDiv);
    // currentDiv.setAttribute(`class`, currentClassName[k]);
    currentDiv.style.width = `340px`;

    // loop through palClassName array to build palette
    for (let k = 0; k < palClassName.length; k++) {
        const palDiv = document.createElement('div');
        palDiv.setAttribute(`class`, `palDiv`);
        paletteTd.appendChild(palDiv);
        palDiv.setAttribute(`class`, palClassName[k]);
        palDiv.style.width = `${palClassArrLen}%`;

        palDiv.addEventListener('click', (ev) => {
            currentDiv.setAttribute(`class`, palClassName[k]);
            fillDiv.setAttribute(`class`, palClassName[k]);
        });
    };

    // MAKE FILL DIV
    const fillDiv = document.createElement('div');
    fillDiv.textContent = `> CLICK HERE TO FILL <`;
    fillDiv.setAttribute(`class`, `currentDiv`);
    fillDiv.id = `fillDiv`;
    fillTd.appendChild(fillDiv);
    fillDiv.style.width = `340px`;

    // IF FILL BUTTON IS PRESSED
    // listen for click and send ID to function
    fillDiv.addEventListener('click', (ev) => {
        // split target into array of row, column values
        let fillTargets = [];
        let fillTarget = ev.target.id;
        let fillClass = ev.target.className;
        let lBoudary = false;
        let lSearch;
        let l = 1;
        console.log(fillTarget);
        console.log(fillClass);
        fillTargets = fillTarget.split(`,`);
        // if (fillTarget !== `currentDiv`) {
        //     while (!lBoudary) {
        //         lSearch = document.getElementById(`${fillTargets[0]}, ${(fillTargets[1]) - l}`);
        //         if (fillClass !== currentDiv) {
        //             l ++;
        //         } else {
        //             alert(currentDiv, fillClass, lSearch);
        //             lBoudary = true;
        //         };
        //     };
            console.log(`${fillTargets[0]}, ${(fillTargets[1]) - 1}`, currentDiv, fillClass);
        // };

        // MAKE COLOR INPUT
    });

    // canvasTd.addEventListener('click', (ev) => {
    //     currentColor = document.getElementById(`currentDiv`);
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
console.log(`pixelScipt.js working`);

document.addEventListener(`DOMContentLoaded`, (ev) => {

    // MAKE 2 x 2 CANVAS OF SQUARES
    // make table to contain canvas divs
    const table = document.createElement('table');
    document.body.appendChild(table);
    table.align = `center`;
    table.style.alignContent = `center`;
    table.width = `339px`;

    let currentColor;
    let drawColor;
    // difine my canvas div layout and add 
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            const canvasDiv = document.createElement('div');
            canvasDiv.setAttribute(`class`, `canvasDiv`);
            table.appendChild(canvasDiv);
            canvasDiv.addEventListener('click', (ev) => {
                currentColor = document.getElementById(`currentDiv`);
                drawColor = currentColor.className;
                canvasDiv.setAttribute(`class`, drawColor);
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
    table.appendChild(currentDiv);
    // currentDiv.setAttribute(`class`, currentClassName[k]);
    currentDiv.style.width = `339px`;

    // loop through palClassName array to build palette
    for (let k = 0; k < palClassName.length; k++) {
        const palDiv = document.createElement('div');
        palDiv.setAttribute(`class`, `palDiv`);
        table.appendChild(palDiv);
        palDiv.setAttribute(`class`, palClassName[k]);
        palDiv.style.width = `${palClassArrLen}%`;

        palDiv.addEventListener('click', (ev) => {
            currentDiv.setAttribute(`class`, palClassName[k]);
        });
    };
});
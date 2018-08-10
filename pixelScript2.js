console.log(`pixelScript.js is working`);

document.addEventListener('DOMContentLoaded', function() {

document.body.onload = addElements;

    // ADD THE ONLOAD ELEMENTS
    function addElements() { 
        
        // MAKE TABLE
        const table = document.createElement('table');
        document.body.appendChild(table);
        table.align = `center`;
        table.style.alignContent = `center`;
        table.width = `550px`;

        // MAKE THE CANVAS DIVS
        let divNum = 1
        for (i = 0; i < 10; i++) {
            for (j = 0; j < 10; j++) {
                let divBrick = document.createElement(`div`);
                table.appendChild(divBrick);
                divBrick.id = (divNum);
                divBrick.style.width = `50px`;
                divBrick.style.height = `50px`;
                divBrick.textContent = divNum;
                divNum ++
            };
        };
        // SPACE FOR INSTRUCTIONS AND MAYBE CURRENT COLOR
        let divInst = document.createElement('div');
        table.appendChild(divInst);
        divInst.style.width = `518px`;
        divInst.style.height = `20px`;
        divInst.textContent = `Click on a Color then Click on the Canvas!`
        divInst.font = `Arial`;
        divInst.align = `center`;

        // MAKE THE PALETTE DIVS
        let divPalNum = 1;
        let palColor;
        for (i = 0; i < 10; i++) {
            let divPal = document.createElement(`div`);
            table.appendChild(divPal);
            divPal.id = (divPalNum);
            switch(divPalNum) {
                case 1:
                    palColor = `red`
                    break;
                case 2:
                    palColor = `orange`
                    break;
                case 3:
                    palColor = `yellow`
                    break;
                case 4:
                    palColor = `green`
                    break;
                case 5:
                    palColor = `blue`
                    break;
                case 6:
                    palColor = `indigo`
                    break;
                case 7:
                    palColor = `violet`
                    break;
                case 8:
                    palColor = `white`
                    break;
                case 9:
                    palColor = `gray`
                    break;
                case 10:
                    palColor = `black`
                    break;
            };
            divPal.style.width = `50px`;
            divPal.style.height = `50px`;
            divPal.style.backgroundColor = palColor;
            divPalNum ++
        };
    };
});
// THEME CHANGER 

let icon = document.getElementById('theme-selector');
icon.value = 1;
document.body.className = 'theme-1'
const themeFunction = () => {
    let state = icon.value;
    if (state === '1') {
        document.body.className = 'theme-1';
    }   else if (state === '2') {
        document.body.className = 'theme-2';
    }   else {
        document.body.className = 'theme-3';
    }
}

icon.addEventListener('change', themeFunction);

///////////////////////////////////////////////////////

let operatorA = "";
let operatorB = "";
let memory = 0;


let buttons = document.querySelector('.number-grid');
let display = document.getElementById('result');
let calculator = document.querySelector('.wrapper');

display.value = "";

const resetFunction = () => {
    display.value = "";
    operatorA = "";
    operatorB = "";
    memory = 0;
}

const numberUpdater = (value) => {
    operatorA += value;
    display.value = operatorA;
}

const multiplyFunction = () => {
    operatorB = operatorA;
    operatorA = "";
    memory = 5;
}

const addFunction = () => {
    operatorB = operatorA;
    operatorA = "";
    memory = 4;
}

const substractFunction = () => {
    operatorB = operatorA;
    operatorA = "";
    memory = 3;
}

const divisionFunction = () => {
    operatorB = operatorA;
    operatorA = "";
    memory = 2;
}

const calculateFunction = () => {
    if (memory === 5) {
        display.value = parseFloat(operatorA) * parseFloat(operatorB);
        memory = 0;
    } else if (memory === 4) {
        display.value = parseFloat(operatorA) + parseFloat(operatorB);
        memory = 0;
    } else if (memory === 3) {
        display.value = parseFloat(operatorB) - parseFloat(operatorA);
        memory = 0;
    } else if (memory === 2) {
        display.value = parseFloat(operatorB) / parseFloat(operatorA);
        memory = 0;
    }
}

/////////////////////////////////
const mainFunction = (e) => {
    let actionElement = e.target.dataset.action;

    if (!actionElement){
        numberUpdater(e.target.textContent);
    } else if (actionElement === "decimal") {
        operatorA += ".";
    } else if (actionElement === "clear") {
        resetFunction();
    } else if (actionElement === "multiply") {
        multiplyFunction();
    } else if (actionElement === "add") {
        addFunction();
    } else if (actionElement === "calculate") {
        calculateFunction();
    } else if (actionElement === "substraction") {
        substractFunction();
    } else if (actionElement === "delete") {
        operatorA = display.value.slice(0, -1);
        display.value = operatorA;
    } else if (actionElement === "divide") {
        divisionFunction();
    }
        
    
};


buttons.addEventListener('click', mainFunction);


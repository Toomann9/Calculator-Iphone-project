// Variables declarations and Initializations

let display = document.getElementsByClassName('screen-section')[0];
let keyboard = document.getElementsByClassName('keyboard-section')[0];
let buttons = keyboard.getElementsByClassName('round-button');

// Loop

for(let i = 0; i < buttons.length; i++){
    let theClikedItem = buttons[i].addEventListener('click', displayFn)
}

// Defining functions

function multiply(n1, n2){
    product = (n1 * n2);
    return product;
}

function displayFn(e){
    if (e.target.innerText == "AC"){
        display.innerText = "";
    } 

    else if (e.target.innerText == "DEL"){
        display.innerText = display.innerText.slice(0, -1);
    }
    
    // else if (e.target.innerText == "*"){
    //     display.innerText = eval(display.innerText * display.innerText);
    // }
    
    else if (e.target.innerText == "="){
        try {
            if(display.innerText.indexOf("%")!= -1){
                display.innerText = display.innerText.slice(0, -1) / 100;
            } else {
                display.innerText = eval(display.innerText);
            }

        } catch {
            display.innerText = "Error!"
        }

    }
    
    else {
        display.innerText += e.target.innerText;
    }
}


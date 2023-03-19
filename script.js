let display = document.getElementsByClassName('screen-section')[0];
let keyboard = document.getElementsByClassName('keyboard-section')[0];
let buttons = keyboard.getElementsByClassName('round-button');

for(let i = 0; i < buttons.length; i++){
    let theClikedItem = buttons[i].addEventListener('click', displayFn)
}

function displayFn(e){
    if (e.target.innerText == "AC"){
        display.innerText = "";
    } 

    else if (e.target.innerText == "DEL"){
        display.innerText = display.innerText.slice(0, -1);
    }
    
    else if (e.target.innerText == "*"){
        display.innerText = display.innerText
    }
    
    else if (e.target.innerText == "="){
        display.innerText = eval(display.innerText);
    }
    
    else {
        display.innerText += e.target.innerText;
    }
}
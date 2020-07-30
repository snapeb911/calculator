const display = document.querySelector('.display');

document.querySelectorAll('.digits button')
    .forEach(button => button.addEventListener('click',digitPressed));

function digitPressed(ev){
    const digit = ev.target.innerText;
    display.value += digit;
}

document.querySelectorAll('.opers button')
    .forEach(button => button.addEventListener('click',opersPressed));

function opersPressed(ev){
    const opers = ev.target.innerText
    display.value+=opers;
}

document.querySelector('.eq').addEventListener('click',eqPressed);
    function eqPressed(){
        display.value = eval(display.value);
    }

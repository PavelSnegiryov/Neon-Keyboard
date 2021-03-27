// clearing input onclick 
document.querySelector('.input').addEventListener('click', () => {
    document.querySelector('.input').value = '';
});

//highlighting pressed keys
function keyDown(event) {
    let pressedKey = event.code;
    document.querySelector(`.key[data-key="${pressedKey}"]`).classList.add('active');
}

function keyUp(event) {
    let unpressedKey = event.code;
    document.querySelector(`.key[data-key="${unpressedKey}"]`).classList.remove('active');
}

document.querySelector('.input').onkeydown = keyDown;
document.querySelector('.input').onkeyup = keyUp;
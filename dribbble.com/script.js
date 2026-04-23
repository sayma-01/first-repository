const a = document.querySelector('a');
const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const text = a.innerText;
let iteration = 0;
function matrix () {
    const str = text.split('').map((char, index) => {
        if(index < iteration){
            return char
        }
        return character.split('')[Math.floor(Math.random() * 52)]
    }).join('')
    a.innerText = str
    
    iteration += 1.8
   
}

setInterval(matrix, 30);
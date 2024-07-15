
import { alert, notice, info, success, error } from '@pnotify/core';

const keysArray = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'o', 'p', 'i' ];
let currentKeyIndex = 0; 
keysArray[5]
console.log(keysArray);
const keyElement = document.getElementById('key');
keyElement.getElementById('key').textContent = keysArray[currentKeyIndex]
function updateKey(){
   keyElement.textContent = keysArray[currentKeyIndex]
}

document.addEventListener('keydown', (event) => {
    if(event.key.toUpperCase() === keysArray[currentKeyIndex]){
        currentKeyIndex = (currentKeyIndex + 1) % keysArray.length;
        updateKey()
    } 
    else { 
        PNotify.error({
        title:'помилка',
        text: `неправильна клавіша: ${event.key.toUpperCase()}`
    });
}
});

document.addEventListener('keypress', (event)=>{
event.preventDefault();

});

document.getElementById('newGameBtn').addEventListener('click', ()=>{
    currentKeyIndex = 0;
    updateKey();
});
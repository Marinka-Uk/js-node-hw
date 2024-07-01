const myButton = document.getElementById('btn');
function buttonClick() {
    alert('Button was clicked!');
}
myButton.addEventListener('click', buttonClick);
console.log(myButton);
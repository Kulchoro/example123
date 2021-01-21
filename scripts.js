let number = document.querySelector('#number');
let button = document.querySelector('#click');
let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');

button.addEventListener('click', function () {

    let min = num1.value;
    let max = num2.value;
    number.innerText = Math.floor(Math.random() * (max - min + 1) + min);
})
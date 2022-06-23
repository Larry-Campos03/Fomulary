import * as eventsModule from './events.js';

const formulary = document.getElementById("formulary");
const inputs = document.querySelectorAll("input");
const submit = document.getElementById("buttonSubmtit");

formulary.addEventListener("submit", e =>{
    e.preventDefault();
});

inputs.forEach(input =>{
    input.addEventListener("keyup", eventsModule.validateDate);
    input.addEventListener("keydown", eventsModule.validateDate);
});

submit.addEventListener("click",eventsModule.validateSubmit);
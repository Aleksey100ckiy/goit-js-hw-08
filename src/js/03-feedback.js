import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
const formToKey = "feedback-form-state";

formEl.addEventListener("input", onInput)
formEl.addEventListener("submit", onSubmit)

let inLocal = localStorage.getItem(formToKey);
let parsed = JSON.parse(inLocal);

emptyForm();

function onInput(){
    console.log("input");
    inLocal = localStorage.getItem(formToKey);
    parsed = JSON.parse(inLocal);
    console.log(parsed);
    localStorage.setItem(formToKey, JSON.stringify({
               email : inputEl.value,
               message : textareaEl.value
           }));
        

}
function onSubmit(e){
    e.preventDefault();
    console.log("submit");
    inLocal = localStorage.getItem(formToKey);
    parsed = JSON.parse(inLocal);
    localStorage.clear();
    inputEl.value = '';
    textareaEl.value = '';
}

function emptyForm(){
    inLocal = localStorage.getItem(formToKey);
    parsed = JSON.parse(inLocal);;
console.log(parsed)
    if(parsed){
        inputEl.value = parsed.email || '';
        textareaEl.value = parsed.message || '';
    }
}





// console.log(parsed)

// function onInput(){
//          json = localStorage.getItem(formKey);
//          parsed = JSON.parse(json);
//         console.log(parsed)
//     localStorage.setItem(formKey, JSON.stringify({
//        email : input.value,
//        message : textarea.value
//    }))
// }

// function onSubmit (evt){
//      evt.preventDefault();
//           json = localStorage.getItem(formKey);
//          parsed = JSON.parse(json)
//         console.log(parsed)
//     localStorage.clear();
//     input.value = '';
//     textarea.value = '';
// }

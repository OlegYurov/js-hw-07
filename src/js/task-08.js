// //1. Создай функцию`createBoxes(amount)`, которая принимает 1 параметр `amount`
// // число. Функция создает столько `div`, сколько указано в `amount` и добавляет их
// // в `div#boxes`.
// // 2. Создай функцию `destroyBoxes()`, которая очищает `div#boxes`


// const refs = {
//     controls: document.querySelector("#controls > input"),
//     btnRender: document.querySelector('#controls button[data-action="render"]'),
//     btnDestroy: document.querySelector('button[data-action="destroy"]'),
//     divBoxes: document.querySelector("#boxes"),
// }


// const heading = document.createElement("div");

// refs.controls.addEventListener('input', createBoxes);
// console.log(refs.controls.value);
// // console.log(refs.btnRender.previousElementSibling.value);
// // refs.btnRender.addEventListener("click", createBoxes);
// // refs.btnDestroy.addEventListener();



// function takeInput(event) {
//     event.currentTarget.value;
//     console.log(event.currentTarget.value);
// }

// function onBtnRender(event) {

// }

// function createBoxes(amount) {
//     const impVal = amount.currentTarget.value;
//     (impVal) => {
// refs.divBoxes.innerHTML = '<div></div>'
//     }
// console.log(amount.currentTarget.value)
// console.log(refs.divBoxes)
// }




var render = document.querySelector('[data-action="render"]');
var destroy = document.querySelector('[data-action="destroy"]');
var boxes = document.getElementById("boxes");
render.addEventListener("click", getAmount);
destroy.addEventListener("click", destroyBoxes);

function getAmount() {
    var amount = +document.querySelector("#controls input").value;
    console.log(amount);
  createBoxes(amount);
}

function createBoxes(amount) {
  var basicSize = 30;
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < amount; i++) {
    var size = basicSize + i * 10;
    var div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function random() {
  return Math.floor(Math.random() * 256);
}
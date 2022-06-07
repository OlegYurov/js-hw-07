// Вынести в переменные значения тегов


const refs = {
    inputEl: document.querySelector("#font-size-control"),
    textEl: document.querySelector("#text"),
}
console.log(refs.textEl.style);
refs.inputEl.addEventListener("input", (e) => {
  refs.textEl.style.fontSize = refs.inputEl.value + "px";
}
)
// })

// const textEl = document.getElementById("text");

// const inputEl = document.getElementById("font-size-control");

// inputEl.addEventListener("input", (e) => {
//   const size = inputEl.value;
//   // console.log(size);

//   textEl.style.fontSize = size + "px";
// });

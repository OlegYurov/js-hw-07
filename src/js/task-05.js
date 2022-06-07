const refs = {
    inputEl: document.querySelector('#name-input'),
    inputPlaceHolder: document.querySelector('[placeholder="Ваше имя?"]'),
    spanEl: document.querySelector('#name-output'),

}

refs.inputEl.addEventListener('input', onImputChange);

function onImputChange(event) {
   event.currentTarget.value
    event.currentTarget.value !== ''
        ? refs.spanEl.textContent = event.currentTarget.value
        :  refs.spanEl.textContent = 'незнакомец';

}

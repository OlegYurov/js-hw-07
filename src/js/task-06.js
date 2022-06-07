const refs = {
    inputEl: document.querySelector("#validation-input"),
    inputData: document.querySelector('input[data-length="6"]')
};

refs.inputEl.addEventListener('blur', onImputCheckSum);

function onImputCheckSum({currentTarget}) {
    
    if (currentTarget.value.length == refs.inputData.dataset.length) {
        currentTarget.classList.add('valid'),
            currentTarget.classList.remove('invalid')
    } else {
 currentTarget.classList.add('invalid'),
 currentTarget.classList.remove('valid')
    }
       
  
        
}

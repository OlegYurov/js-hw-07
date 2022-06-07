const categories = document.querySelector(`#categories`);
console.log(`'В списке ${categories.children.length} категории.'`);

const allItems = document.querySelectorAll('.item');


const readTitleItems = items => items.forEach(item => {
    console.log(item.firstElementChild.textContent); 
    console.log(item.lastElementChild.childElementCount);

});
    
readTitleItems(allItems);






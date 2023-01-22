const numberOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories:${numberOfCategories.length}`);


const titleAndQuantityOfCategories = numberOfCategories.forEach(function (teg) {console.log(`Category: ${teg.firstElementChild.textContent}`);
console.log(`Elements: ${teg.lastElementChild.children.length}`)
});

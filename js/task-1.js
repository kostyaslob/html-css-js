const category = document.querySelectorAll(".item");
console.log(`Number of categories: ${category.length}`);


category.forEach(element => {
    const categoryName = element.querySelector("h2").textContent;
    const elementsQty = element.querySelectorAll("ul li");

    console.log(`Category: ${categoryName}`);        
    console.log(`Elements: ${elementsQty.length}`);        
});




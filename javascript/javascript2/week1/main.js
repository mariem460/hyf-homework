console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(){
    const productsUl= document.getElementById("ulProducts");
    products.forEach(product => {
        
        const nameOfProd = document.createElement("h2");
        const priceOfProd = document.createElement("li")
        const rateOfProd = document.createElement("li")
        nameOfProd.innerText=product.name;
        priceOfProd.innerText=`price: ${product.price}`;
        rateOfProd.innerText=`rate: ${product.rating}`;
        productsUl.appendChild(nameOfProd);
        productsUl.appendChild(priceOfProd);
        productsUl.appendChild(rateOfProd);
        
        
    });
}

renderProducts();
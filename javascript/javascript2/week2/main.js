console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(arr) {
    const productsUl = document.getElementById("ulProducts");
    productsUl.innerText = "";
    arr.forEach(product => {
        const nameOfProd = document.createElement("h2");
        const priceOfProd = document.createElement("li")
        const rateOfProd = document.createElement("li")
        nameOfProd.innerText = product.name;
        priceOfProd.innerText = `price: ${product.price}`;
        rateOfProd.innerText = `rate: ${product.rating}`;
        productsUl.appendChild(nameOfProd);
        productsUl.appendChild(priceOfProd);
        productsUl.appendChild(rateOfProd); 
    });
}
renderProducts(products);
//JS Hw week 2 
//filter price
const filtredProducts = () => {
    let priceValue = document
        .getElementById("filter_price")
        .value;
    let cheaperProducts = products.filter(product => product.price <= priceValue);
    console.log(cheaperProducts);
    renderProducts(cheaperProducts);
}
const filterPrice = document
    .getElementById("button")
    .addEventListener("click", filtredProducts);

//serach for product
const searchForProduct = () => {
    let serchedName = document
    .getElementById("filter_product")
    .value.toLowerCase();
    console.log(serchedName)
    //let productNames = products.map(product => product.name.toLowerCase())
    let findedProducts = products.filter((product)=> {
        const name = product.name.toLowerCase();
        return name.includes(serchedName)
    })
    renderProducts(findedProducts)
}
const filterProduct = document
    .getElementById("button_search")
    .addEventListener("click", searchForProduct);

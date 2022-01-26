console.log("js3 week3");

//Paint a circle to a canvas element exercise

const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(300, 50, 40, 0, 2 * Math.PI);
ctx.fillStyle = "pink";
ctx.fill()
ctx.stroke();

//Class creation exercise
class Circle {
    constructor(x, y, r, sAngle, eAngle, color) {
        const c = document.getElementById("myCanvas");
        const ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(x, y, r, sAngle, eAngle * Math.PI);
        ctx.fillStyle = color;
        ctx.fill()
        ctx.stroke();
    }
}
const mycrl = new Circle(95, 50, 30, 0, 2 * Math.PI, "#000000")
const mycrl2 = new Circle(90, 200, 60, 0, 2 * Math.PI, "red")
const mycrl3 = new Circle(50, 400, 40, 0, 2 * Math.PI, "green")

class Circle2 {
    constructor(randomX, randomY, randomRad, randsAngle, randeAngle) {
        const c = document.getElementById("myCanvas2");
        const ctx = c.getContext("2d");
        ctx.beginPath();
        let randomColor ='#'+ Math.floor(Math.random()*16777215).toString(16);
        ctx.fillStyle = randomColor;
        let x = Math.floor(Math.random() * randomX);
        let y= Math.floor(Math.random() * randomY);
        let r = Math.floor(Math.random() * randomRad); 
        let stangle = Math.floor(Math.random() * randsAngle);
        let edangle = Math.floor(Math.random() * randeAngle);
        ctx.arc(x, y, r, stangle, edangle * Math.PI);
        ctx.fill()
        ctx.stroke();
    }
}
setTimeout(() => {
    new Circle2(60, 70, 50, 100, 100 * Math.PI)
}, 1000);

//Getting into promises exercise
const promise1 = fetch('https://api.github.com/search/repositories?q=user:benna100')
    .then(response => response.json())
    .then(data => {
        console.log("Benna repos:", data.items[1].blobs_url)
        return data.items[1].blobs_url;
    });

const promise2 = fetch('https://api.github.com/search/repositories?q=user:chunmeishui')
    .then(response => response.json())
    .then(data => {
        console.log("chunmai repos:", data.items[1].compare_url);
        return data.items[1].compare_url;
    });   

const promise3 =  fetch('https://api.github.com/search/repositories?q=user:faheem102')
    .then(response => response.json())
    .then(data => {
        console.log("faheem repos: ", data.items[4].contents_url)
        return  data.items[4].contents_url
    });
  
const promisesArray = [promise1, promise2, promise3];
    Promise.all(promisesArray)
    .then((values) => {
        const ul = document.createElement("ul");
        for (let i = 0; i < values.length; i++) {
            console.log(values[i])
            const li = document.createElement("li");
            li.innerHTML = (` URL from the ${values[i]}`);
            ul.appendChild(li)
        }
        document.getElementById("promises").appendChild(ul);
        console.log("well done")
    })
    .catch((error) => {
        console.log("something went wrong,", error)
    });

//Shopping cart using Classes exercise
class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  

class ShoppingCart {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      // Implement functionality here
      this.products.push(product)
    }
  
    removeProduct(product) {
      // Implement functionality here
      this.products.pop(product)
    }
  
    searchProduct(productName) {
      // Implement functionality here
      //searchProduct should return an array of product that match the productName parameter
        const arrayOfprod = this.products
            .map (product => product.name)
            .filter(name => name.includes(productName))
            console.log(arrayOfprod)
    }
  
    getTotal() {
      // Implement functionality here
      return this.products
        .map(product => product.price)
        .reduce((acc, price) => acc + price, 0)
      
    }   
  
    renderProducts() {
      // Implement functionality here
      const ulElement = document.createElement("ul")
      this.products.forEach(product => {
          const liElement = document.createElement("li");
          liElement.innerHTML = product.name;
          ulElement.appendChild(liElement);
      });
      document.getElementById("shopping").appendChild(ulElement)
    }
  
    getUser(user) {
      // Implement functionality here
      fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
        .then(response => response.json())
        .then(data => console.log(data));
    }
  }

const flatscreen = new Product("flat-screen", 5000);  
const computer = new Product("computer", 20000);
const table = new Product ("table", 3000);
const shoppingCart = new ShoppingCart();
shoppingCart.addProduct(flatscreen)
shoppingCart.addProduct(computer)
shoppingCart.addProduct(table)
console.log(shoppingCart.getTotal());
shoppingCart.renderProducts()
shoppingCart.searchProduct("table")
shoppingCart.searchProduct("kkkkk")
shoppingCart.searchProduct("computer")
shoppingCart.searchProduct("seat")
shoppingCart.getUser(1);
console.log(shoppingCart)


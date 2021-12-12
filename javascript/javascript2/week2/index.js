console.log("js2 week2")
let numbers = [1, 2, 3, 4, 6, 7];
let newNumbers = [];

const doubledNumbers = numbers.filter((number)=>{
    if(number%2==0){
        console.log(`even numbers are: ${number}`)
    }else if(number%2!==0){
        let oddNumbers = number*2;
        newNumbers.push(oddNumbers);
    }
});
console.log(`new numbers ${newNumbers}`);

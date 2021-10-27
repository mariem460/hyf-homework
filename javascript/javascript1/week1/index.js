/*human age calculator*/
let yearOfBirth = 1987;
let yearFuture = 2027;
let age = yearFuture - yearOfBirth;
console.log (`You will be ${age} years old in 2027`);

/*dog age calculator*/
let dogYearOfBirth = 2020;
let dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth ;
let shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears){
    console.log(`Your dog will be ${dogYear} dog years old in 2027`);
}
else{
    console.log(`our dog will be 10 human years old in 2027`)
}

/*house pricey*/
let wide1 = 8;
let height1 = 10;
let deep1 = 10;
let gardenSize1 = 100;
let volumeInMeters1 = wide1 * height1 * gardenSize1;
let housePrice1 = volumeInMeters1 * 2.5 * 1000 + gardenSize1 *300;
console.log(`Peter's house will costs ${housePrice1}`);
let wide2 = 5;
let height2 = 8;
let deep2 = 11;
let gardenSize2 = 70;
let volumeInMeters2 = wide2 * height2 * gardenSize2;
let housePrice2 = volumeInMeters2 * 2.5 * 1000 + gardenSize2 *300;
console.log(`Jilia's house will costs ${housePrice2}`);


/*start up name*/
let firstWords = ["Easy", "awsome", "Corporate", "hello", "Imagine"];
let secondWords = ["tech", "magic", "now", "future", "new"];
var foodItems = ["Bannana", "Apple", "Orange"];
var randomFirstWords = firstWords[Math.floor(Math.random() * firstWords.length)];
var randomSecondWords = secondWords[Math.floor(Math.random() * secondWords.length)];
var startupName = randomFirstWords +" "+ randomSecondWords;
console.log(startupName);




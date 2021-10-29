/*human age calculator*/
let yearOfBirth = 1987;
let yearFuture = 2027;
let age = yearFuture - yearOfBirth;
console.log (`You will be ${age} years old in 2027`);

/*dog age calculator*/
let dogYearOfBirth = 2020;
let dogYearFuture = 2027;
let dogYear = (dogYearFuture - dogYearOfBirth)*7 ;
let humanYear = (dogYearFuture - dogYearOfBirth);
let shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears){
    console.log(`Your dog will be ${dogYear} dog years old in 2027`);
}
else{
    console.log(`Your dog will be ${humanYear} human years old in 2027`);

}


/*house pricey*/
let wide1 = 8;
let height1 = 10;
let deep1 = 10;
let gardenSize1 = 100;
let volumeInMeters1 = wide1 * height1 * gardenSize1;
let housePrice1 = volumeInMeters1 * 2.5 * 1000 + gardenSize1 *300;
console.log(housePrice1);
if(housePrice1 > 2.500){
    console.log(`Peter's house will costs ${housePrice1} and that is not good price`);
}
else if (housePrice1 < 2.500){
    console.log(`Peter's house will costs ${housePrice1}, so it could be good price`);
}

let wide2 = 5;
let height2 = 8;
let deep2 = 11;
let gardenSize2 = 70;
let volumeInMeters2 = wide2 * height2 * gardenSize2;
let housePrice2 = volumeInMeters2 * 2.5 * 1000 + gardenSize2 *300;
if(housePrice2 > 1.000){
    console.log(`Jilia's house will costs ${housePrice2}, so it is not a good price`);
}
else if (housePrice2 < 1.000){
    console.log(`Julia's house will costs ${housePrice1}, so it could be good price`);
}




/*start up name*/
let firstWords = ["Easy", "awsome", "Corporate", "hello", "Imagine"];
let secondWords = ["tech", "magic", "now", "future", "new"];
let foodItems = ["Bannana", "Apple", "Orange"];
let randomFirstWords = firstWords[Math.floor(Math.random() * firstWords.length)];
let randomSecondWords = secondWords[Math.floor(Math.random() * secondWords.length)];
let startupName = randomFirstWords +" "+ randomSecondWords;
let numOfCharc = startupName.length;
console.log(`the startup name is "${startupName}" and it will contains ${numOfCharc} charcters`)




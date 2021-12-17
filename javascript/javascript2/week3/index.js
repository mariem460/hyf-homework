console.log("js2 week3")
//Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
setTimeout(() => {console.log("Called after 2.5 seconds")}, 2500);

//Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. 
//Call the function you have created with some different arguments.
function textToLog (delay, stringToLog) {
    setTimeout(() => { console.log(stringToLog)
        
    }, delay);
}
textToLog(3000, "hello")
textToLog(5000, "hello world")

//Create a button in html. When clicking this button
//use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.
const buttonTag = document
    .getElementById("button")
    .addEventListener("click", () => {
        textToLog(5000, "loged after 5 sec")
    })

//Create two functions and assign them to two different variables. One function logs out Earth
// the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. 
//The only thing the third function should do is call the provided parameter function. 
//Try call the third function once with the Earth function and once with the Saturn function.
const earthLogger = () => {
    console.log("earth")
   
}

const saturnLogger = () => {
    console.log("saturn")
}

function generalLogger(planetLogFunction) {
   planetLogFunction()
}

generalLogger(earthLogger)
generalLogger(saturnLogger)

//location 
var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

document.getElementById("location").addEventListener("click", getLocation)

//Create a function called runAfterDelay. It has two parameters: delay and callback.
// When called the function should wait delay seconds and then call the provided callback function.
// Try and call this function with different delays and different callback functions
function callBack1  () {
   console.log("this the first callback")
};

function callBack2  () {
    console.log("this the second callback")
};

function callBack3  () {
    console.log("this the third callback")
};

const runAfterDelay = (delay, callback ) => {
    setTimeout(() => {callback()
    }, delay);
}
runAfterDelay(2000, callBack1)
runAfterDelay(5000, callBack2)
runAfterDelay(6000, callBack3)

//Check if we have double clicked on the page. 
//A double click is defined by two clicks within 0.5 seconds. 
//If a double click has been detected, log out the text: "double click!"
var eventFire = false;
const detector = document.querySelector('aside').addEventListener("dblclick", function (){
    eventFire = true ;
    console.log("fire")
    if(eventFire) {
        alert('Event Fire')
        document.getElementById("detector-text").innerHTML = "double click detected";
    } else {
        console.log("erreur")
    }
})

//Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, 
//logFunnyJoke - function 
//and logBadJoke - function.
// If you set shouldTellFunnyJoke to true it should call
// the logFunnyJoke function that should log out a funny joke. And vice versa.
const badJoke = () => {
    console.log("Who’s there?Interrupting cow Interrupting c– MOO!")
} 
const funnyJoke = () => {
    console.log("What do you call a boomerang that won’t come back it is  a stick hahahah")
} 

const jokeCreator = ( shouldTellFunnyJoke, logFunnyJoke, logBadJoke) => {
    if(shouldTellFunnyJoke){
        logFunnyJoke()
    }else{
        logBadJoke()
    }
}
jokeCreator(true, funnyJoke, badJoke)

//Function as a variable    
const first_function = (text) => {
    console.log(text)
};

const second_function = (text) => {
    console.log(text)
};

const third_function = (text) => {
    console.log(text)
};

var arrayOfFunctions = [
    first_function,
    second_function,
    third_function
]

for (let i = 0; i < arrayOfFunctions.length; i++) {
    arrayOfFunctions[i](`the ${i} call function`);
}

//Create a function as a const and try creating a function normally. 
//Call both functions.
const doSomething = () => {
    console.log("function as a const")
}
function normalFunction () {
    console.log("normal function")
}
doSomething();
normalFunction();

//Create an object that has a key whose value is a function. 
//Try calling this function.
const country = {
    location: function() {
      console.log("my country is Tunisia")
    }
};
country.location()

//extra 
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
};

//The fastest presser in this realm
var countS = 0;
var countL = 0;

document
    .getElementById("button-game")
    .addEventListener("click", function(){
        let time = document.getElementById("seconds").value;
    setTimeout(() => {const end = document.getElementById("end");
    end.innerHTML = "Game Over";}, time * 1000);
})

/*document.getElementById("sPresser").addEventListener("click", function(){
    countS++;
    const numberOfPress = document.getElementById("startS");
    numberOfPress.innerHTML = countS;
    
})
document.getElementById("lPresser").addEventListener("click", function(){
    countL++;
    const numberOfPress = document.getElementById("startL");
    numberOfPress.innerHTML = countL;
    
});
*/
document.getElementById("sPresser").addEventListener("keydown", function(event){
    if (event.key == "s") {
        countS++;
        const numberOfPress = document.getElementById("startS");
        numberOfPress.innerHTML = countS;
    }
})
/*
function handleEvent(event) {
  if (event.key == "s") {
    sCount.innerHTML = countS++;
    sPressCount.push(countS);
  }
  if (event.key == "l") {
    lCount.innerHTML = countP++;
    lPressCount.push(countP);
  }
}
*/


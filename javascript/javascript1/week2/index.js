/*Flight booking fullname function*/
function getFullname(firstname, surname, useFormalName, isfemale){
    if(useFormalName===true && isfemale===false ){
        return (`Lord ${firstname} ${surname}`)

    }else if(useFormalName===true && isfemale===true ){
        return (`Madam ${firstname} ${surname}`)
    }else{
        return (`${firstname}  ${surname}`);
    }
   
}
var fullName1 = getFullname("Jhon", "Nedey", true, false)
var fullName2 = getFullname("Vibeke", "Heldin", false, true)
console.log(getFullname(fullName1));
console.log(getFullname(fullName2));





/*Event application*/
function isBeingHeld(heldInXDay){
    let day = new Date();
    let today = day.getDay()
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let countingDay = (today + heldInXDay )%7
    return (weekDays[countingDay]);
}
    
let heldIn = isBeingHeld(10);
console.log(heldIn);

/*Weather wear*/
function clothesToWear(temprature){
    if(temprature<=10){
        console.log(`Temperature is ${temprature} degree so you should wear very well`)
    }else if(10<temprature<=20){
        console.log(`Temperature is ${temprature} degree so you should wear soft clothes`)
    }else{
        console.log(`Temperature is ${temprature} degree so you should wear summer clothes`)

    }
}
const clothesOfTheDay = clothesToWear(18);

/*Student manager */
const class07Students = [];
function addStudentToClass(studentName) {
  if(class07Students.length <=6){
    class07Students.push(studentName);
  }else if(class07Students.length>=6){
    console.log("Cannot add more students to class 07")
  }else if(class07Students.length >= 6 && studentName === "queen"){
    class07Students.splice(3, 1, "queen");   
  }else if(class07Students.includes(studentName)){
    console.log(`Student ${studentName}  is already in class 07`)  
    }
}
addStudentToClass("Mariem")
addStudentToClass("Martin")
addStudentToClass("Amal")
addStudentToClass("Sophie")
addStudentToClass("Ali")
addStudentToClass("Edia")
addStudentToClass("queen")

console.log(class07Students)

function getNumberOfStudents() {
  return class07Students.length;
}
var studentNumb = getNumberOfStudents();
console.log(studentNumb);

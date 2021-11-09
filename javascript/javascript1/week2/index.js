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
    const day = new Date();
    const today = day.getDay()
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const countingDay = (today + heldInXDay )%7
    return (weekDays[countingDay]);
}
    
const heldIn = isBeingHeld(10);
console.log(heldIn);

/*Weather wear*/
function clothesToWear(temperature){
  if(temperature<=10){
      console.log(`Temperature is ${temperature} degree so you should wear very well`)
  } else if (temperature<=30){
      console.log(`Temperature is ${temperature} degree so you should wear soft clothes`)
  } else {
      console.log(`Temperature is ${temperature} degree so you should wear summer clothes`)
  }
}
const clothesOfTheDay = clothesToWear(18);

/*Student manager */
const class07Students = [];
function addStudentToClass(studentName) {
  if(class07Students.includes(studentName)){
      console.log(`Student ${studentName}  is already in class 07`)  
  } else if( studentName === "queen") {
    class07Students.push(studentName);
  } else if(class07Students.length< 6) {
      class07Students.push(studentName);  
  } else if(class07Students.length >= 6) {
    console.log("Cannot add more students to class 07")
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

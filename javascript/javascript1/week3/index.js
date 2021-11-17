console.log("hello week3")
//Item array removal
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
console.log(names);
// Code done
const nameToRemove =  names.splice(1, 1);
console.log(names);

//When will we be there??
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
const time = (travelInformation.destinationDistance / travelInformation.speed) * 60;

function timeConvert(number) {
  const num = number;
  const hours = (num / 60);
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
}
console.log(timeConvert(time));
//Series duration of my life
const seriesDurations = [
{
  title: "Peaky blinders",
  days: 1,
  hours: 6,
  minutes: 0,
},
{
  title: "Pride and prejudice",
  days: 1,
  hours: 10,
  minutes: 27,
},
{
  title: "Friends",
  days: 5,
  hours: 15,
  minutes: 50,
}
];
let lifespan = 80;
function percentage() {
  for(let i=0; i<=2; i++) {
    const seriesDurationInHours = (seriesDurations[i].days*24 + seriesDurations[i].hours + seriesDurations[i].minutes*60);
    const percentageseriesDuration= seriesDurationInHours /100;
    const tookFromMe= 80 - percentageseriesDuration/100;
    console.log(`${seriesDurations[i].title} tooks from me ${80 -tookFromMe} %`);
  }
}
percentage();

//NOnoN0nOYes 
const notes = [];
function saveNote(content, id){
  const objNotes = {
    content: content,
    id:id
  }
  notes.push(objNotes);
  console.log(objNotes);
}
saveNote("hello", 1);
saveNote("hej", 2);
saveNote("hi", 3);
saveNote("hola", 1);

//get note
function getNote(id) {
  const getMyNote =[];
  notes.forEach(note => {
    if(note.id===id) {
        getMyNote.push(note.content)
        console.log(`The note with id ${id} is ${getMyNote} `)
    }   
  });
}
getNote(3);
getNote(2);

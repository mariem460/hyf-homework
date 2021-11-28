console.log("JS2 week1");
//Find the shortest word   
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function shortestString(){
    for (let i = 0; i<danishWords.length; i++){
        if(danishWords[i].length<=1){
            console.log(danishWords[i])
        }
    }
}
 shortestString();

 //Find and count the Danish letters 
function danishLetterCounter(str) {
    const øCounter = (str.match(/[øØ]/g) || []).length;
    const æCounter = (str.match(/[æÆ]/g) || []).length;
    const åCounter = (str.match(/[åÅ]/g) || []).length;
    total = æCounter + åCounter + øCounter;
    const result = [{ "total": total, "æ": æCounter, "ø": øCounter, "å": åCounter }];
    console.log(result);
}
const danishString = "Jeg har en blå bil å Å ø ";
danishLetterCounter(danishString); // returns {total: 1, å: 1}


 //Spirit animal name generator
const spiritAnimalNames = ["strong Butter", "gragon Boy", "butter fluffy", "hello amazing", 
"ninja", "yellow man", "yoko girl", "strange man", "man on fire", "scrap nina"]
const buttonTag = document.getElementById("button").addEventListener("click", function(){
     if(document.getElementById("userName").value !==""){
        const name =document.getElementById("userName").value;
        const item = spiritAnimalNames[Math.floor(Math.random()*spiritAnimalNames.length)];
        const whereToDisplay = document.getElementById("spirit-animal");
        const result = (`name: ${name} - ${item}`);
        whereToDisplay.innerHTML= result;
    }else if(document.getElementById("userName").value==""){
        alert("empty! enter a name first")
    }
});
const buttonTag2 = document.getElementById("button2").addEventListener("click", function(){
    var item = spiritAnimalNames[Math.floor(Math.random()*spiritAnimalNames.length)];
    const whereToDisplay2 = document.getElementById("spirit-animal2");
    const result2  = (`new spirit animal : ${item}`);
    whereToDisplay2.innerHTML = result2;
});

 

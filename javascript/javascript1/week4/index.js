//JS week4
const storeName = [];
const listToDo =[];
const numbers =[];

function getReply(command){
    if(command ==="Hello my name is Mariem" || command.includes("my name is Mariem")) {
        let command1 = command.split(" ");
        console.log (command1);
        let userName = command1[command1.length-1];
        storeName.push(userName);
         console.log(`Nice to meet you ${userName}`)
    }
    if(command === "What is my name?" && storeName.length >= 1) {
        console.log(`Your name is ${storeName[0]}`);
    }else if (storeName.length == 0){
        console.log('Your name is not here yet !');
    }
    if(command==="Add fishing to my todo"){
        const listCommand =command.replace("Add fishing to my todo", "fishing")
        listToDo.push(listCommand);
        console.log("fishing added to your todo");
        console.log(listToDo);
    }
    if(command==="Add singing in the shower to my todo"){
        const listCommand2 =command.replace("Add singing in the shower to my todo", "singing in the shower")
        listToDo.push(listCommand2);
        console.log("Singing added to your todo");
        console.log(listToDo);
    }
    for(let i=0; i<listToDo.length; i++){
        if(listToDo[i]==="fishing"){
           listToDo.splice(i, 1); 
           console.log(`after deleting your list contains ${listToDo.length} item(s)`);
        }
    }
    if(command==="What is on my todo?"){
        for(let i=0; i<listToDo.length; i++){
            console.log(`Your list contains : ${listToDo[i]}`);
        }
    }
    if(command==="What day is it today?"){
        var d= new Date();
        d.getDate();//Get the day as a number (1-31)
        d.getMonth();//Get the month as a number (0-11)
        d.getFullYear();//Get the year as a four digit number (yyyy)
        var currentDate = new Date();
        console.log(`Today is ${currentDate}`);
    }
    if(command.includes("what is") && command.includes("+")){
        const spiledOperation = command.split(" ");
        numbers.push(spiledOperation[4]);
        numbers.push(spiledOperation[2])
        const resultOfOperation = Number(spiledOperation[2]) + Number(spiledOperation[4]);
        console.log(resultOfOperation);
    }else if(command.includes("what is") && command.includes("*")){
        const spiledOperation = command.split(" ");
        numbers.push(spiledOperation[4]);
        numbers.push(spiledOperation[2])
        const resultOfOperation = Number(spiledOperation[2]) * Number(spiledOperation[4]);
        console.log(resultOfOperation);
        
    }else if(command.includes("what is") && command.includes("-")){
        const spiledOperation = command.split(" ");
        numbers.push(spiledOperation[4]);
        numbers.push(spiledOperation[2])
        const resultOfOperation = Number(spiledOperation[2]) - Number(spiledOperation[4]);
        console.log(resultOfOperation);

    }
    if(command==="set a timer for 4 minutes"){
        console.log("Timer is set");
        function setTimer(){
            console.log('4 minutes is up!!');
             }
             setTimeout(setTimer, 4000,  );
    }   
}

getReply("hello my name is Mariem");
getReply("What is my name?");
getReply("Add fishing to my todo");
getReply("Add singing in the shower to my todo");
getReply("What is on my todo?");
getReply("What day is it today?");
getReply("what is 3 + 3");
getReply("what is 3 * 45");
getReply("what is 100 - 12");
getReply("set a timer for 4 minutes");